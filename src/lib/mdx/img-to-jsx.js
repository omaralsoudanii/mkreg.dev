import visit from 'unist-util-visit'
import sizeOf from 'image-size'
import fs from 'fs'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (options) => (tree) => {
  visit(
    tree,
    // only visit p tags that contain an img element
    // only visit p tags that contain an img element
    (node) =>
      node.type === 'paragraph' &&
      node.children.some((n) => n.type === 'image'),
    (node) => {
      const imageNode = node.children.find((n) => n.type === 'image')

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
          quality={80}
      />`
        // Change node type from p to div to avoid nesting error
        const containerElem = {
          type: 'element',
          data: {
            hName: 'div',
            hProperties: {
              class: '-mx-4 md:mt-0 md:-mx-8',
            },
          },
          children: [imageNode],
        }
        replace(node, containerElem)
      }
    }
  )
}

function replace(source, target) {
  for (const property in source) {
    delete source[property]
  }

  Object.assign(source, target)
}
