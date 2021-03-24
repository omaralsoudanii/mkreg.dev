import React from 'react'

export default function Heading({ title, subTitle = '' }) {
  return subTitle ? (
    <div className="space-y-2">
      <h1 className="text-heading-1">{title}</h1>
      <p className="text-p-1">{subTitle}</p>
    </div>
  ) : (
    <h1 className="text-heading-1">{title}</h1>
  )
}
