/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
// taken from tailwind-nextjs-starter-blog https://github.com/timlrx/tailwind-nextjs-starter-blog
import visit from 'unist-util-visit'
import sizeOf from 'image-size'
import { existsSync } from 'fs'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options) => (tree) => {
  visit(
    tree,
    // only visit p tags that contain an img element
    (node) =>
      node.type === 'paragraph' &&
      node.children.some((n) => n.type === 'image'),
    (node) => {
      const imageNode = node.children.find((n) => n.type === 'image')

      // only local files
      if (existsSync(`${process.cwd()}/public${imageNode.url}`)) {
        const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)

        // Convert original node to next/image
        ;(imageNode.type = 'mdxJsxFlowElement'),
          (imageNode.name = 'Image'),
          (imageNode.attributes = [
            { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
            { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
            { type: 'mdxJsxAttribute', name: 'width', value: dimensions.width },
            {
              type: 'mdxJsxAttribute',
              name: 'height',
              value: dimensions.height,
            },
          ])

        // Change node type from p to div to avoid nesting error
        node.type = 'div'
        node.children = [imageNode]
      }
    }
  )
}
