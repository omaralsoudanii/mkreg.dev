const visit = require('unist-util-visit')
const sizeOf = require('image-size')
const fs = require('fs')

module.exports = () => (tree) => {
  visit(
    tree,
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
          sizes={\`(max-width: 640px) 66vw,(max-width: 1200px) 50vw, 100vw\`}
          layout={\`responsive\`}
          quality={\`75\`}
      />`

        // Change node type from p to div to avoid nesting error
        node.type = 'div'
        node.children = [imageNode]
      }
    }
  )
}
