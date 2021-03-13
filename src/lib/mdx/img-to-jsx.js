import visit from 'unist-util-visit'
import sizeOf from 'image-size'
import fs from 'fs'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (options) => (tree) => {
  visit(
    tree,
    // only visit p tags that contain an img element
    (node) =>
      node.type === 'paragraph' &&
      node.children.some((n) => n.type === 'image'),
    (imgN) => {
      const node = imgN.children.find((n) => n.type === 'image')
      const { alt, caption } = extractCaption(node)

      const imageNode = { ...node, alt }
      // only local files
      if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
        const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)

        // Convert original node to next/image
        imageNode.type = 'jsx'
        imageNode.value = `<Image
          alt={\`${imageNode.alt}\`} 
          src={\`${imageNode.url}\`}
          width={${dimensions.width}}
          height={${dimensions.height}}
          loading="lazy"
          layout="responsive"
          quality={75}
      />`
        const figureElement = {
          type: 'element',
          data: { hName: 'figure' },
        }
        if (!caption) {
          figureElement.children = [imageNode]
        } else {
          const captionElement = {
            type: 'element',
            data: { hName: 'figcaption' },
            children: [{ type: 'text', value: caption }],
          }

          figureElement.children = [imageNode, captionElement]
        }
        replace(imgN, figureElement)
      }
    }
  )
}

function extractCaption(node) {
  // eslint-disable-next-line no-useless-escape
  const captionRegex = /(\{caption=([^\{\}]+)\})/
  if (!node.alt) {
    return { alt: node.alt }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const caption = captionRegex.exec(node.alt)
  if (caption && caption.length) {
    node.alt = caption[0]
    return {
      caption: caption[2],
      alt: node.alt,
    }
  }
  return {
    alt: node.alt,
  }
}

function replace(source, target) {
  for (const property in source) {
    delete source[property]
  }

  Object.assign(source, target)
}
