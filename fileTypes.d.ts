declare module '*.svg' {
  import React = require('react')
  const src: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  export default src
}
