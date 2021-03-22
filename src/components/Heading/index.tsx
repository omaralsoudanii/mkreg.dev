import React from 'react'

export default function Heading({ title, subTitle }) {
  return (
    <React.Fragment>
      <h1 className="text-heading-1">{title}</h1>
      <p className="text-p-1">{subTitle}</p>
    </React.Fragment>
  )
}
