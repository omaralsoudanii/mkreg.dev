import React from 'react'
import rehypeReact, {
  ComponentProps,
  ComponentPropsWithNode,
} from 'rehype-react'
import unified from 'unified'
import { Node } from 'unist'

import { NextLink } from './NextLink'
import { NextImage } from './NextImage'

const options = {
  createElement: React.createElement,
  Fragment: React.Fragment,
  passNode: true,
  components: {
    Link: (props: ComponentProps) => (
      <NextLink {...(props as ComponentPropsWithNode)} />
    ),
    Image: (props: ComponentProps) => (
      <NextImage {...(props as ComponentPropsWithNode)} />
    ),
  },
}

const renderAst = unified().use(rehypeReact, options)

interface BodyProps {
  htmlAst: Node | null
}

export const Body = ({ htmlAst }: BodyProps) => {
  if (!htmlAst) return null
  return <>{renderAst.stringify(htmlAst)}</>
}
