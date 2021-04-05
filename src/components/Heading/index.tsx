import React from 'react'

export default function Heading({ title, subTitle = '' }) {
  return subTitle ? (
    <div className="space-y-2">
      <h1 className="font-extrabold text-primary">{title}</h1>
      <p className="text-xl">{subTitle}</p>
    </div>
  ) : (
    <h1 className="font-extrabold text-primary">{title}</h1>
  )
}
