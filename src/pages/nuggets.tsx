import * as React from 'react'
import Heading from '@/components/Heading'

function Nuggets() {
  return (
    <article>
      <div className="flex flex-col items-start py-4 space-y-4">
        <Heading
          title="Nuggets"
          subTitle="Resources I recommend everyone to read"
        />
        <div className="hr-stroke" />
      </div>
      <div className="flex flex-col items-start space-y-4">
        <p className="text-xl">Under construction.</p>
      </div>
    </article>
  )
}

export default Nuggets
