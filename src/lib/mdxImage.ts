import { existsSync } from 'fs'

import sizeOf from 'image-size'
import { Parent, Node, Literal } from 'unist'
import { Test } from 'unist-util-is'
import { visit } from 'unist-util-visit'

export default function mdxImage(): (tree: Node) => void {
  return (tree: Node) => {
    visit<Node, Test>(
      tree,
      // only visit p tags that contain an img element
      (node: Parent): node is Parent =>
        node.type === 'paragraph' &&
        node.children.some((n) => n.type === 'image'),
      (node: Parent) => {
        type ImageNode = Parent & {
          url: string
          alt: string
          name: string
          attributes: (Literal & { name: string })[]
        }
        const imageNode = node.children.find(
          (n) => n.type === 'image'
        ) as ImageNode

        if (existsSync(`${process.cwd()}/public${imageNode.url}`)) {
          const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)

          // Convert original node to next/image
          ;(imageNode.type = 'mdxJsxFlowElement'),
            (imageNode.name = 'Image'),
            (imageNode.attributes = [
              { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
              { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
              {
                type: 'mdxJsxAttribute',
                name: 'width',
                value: dimensions.width,
              },
              {
                type: 'mdxJsxAttribute',
                name: 'height',
                value: dimensions.height,
              },
            ])

          node.type = 'div'
          node.children = [imageNode]
        }
      }
    )
  }
}
