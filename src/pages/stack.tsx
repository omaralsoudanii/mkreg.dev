import * as React from 'react'
import Heading from '@/components/Heading'

function Stack() {
  return (
    <article>
      <div className="flex flex-col items-start py-4 space-y-4">
        <Heading title="Stack" subTitle="A list of what i know about tech." />
        <div className=" hr-stroke" />
      </div>
      <div className="flex flex-col items-start space-y-4">
        <p className="text-xl">Under construction.</p>
      </div>
    </article>
  )
}

export default Stack
