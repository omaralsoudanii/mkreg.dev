import Heading from '@/components/Heading'
import Image from 'next/image'
import { SEO } from '@/components/Seo/seo'
import dayjs from 'dayjs'

function Stack() {
  const meta = {
    title: 'Stack',
    description: 'Omar Alsoudani tech stack',
  }
  return (
    <article>
      <SEO {...meta} />
      <div className="flex flex-col items-start py-4 space-y-4">
        <Heading title="Stack" subTitle="A list of what I know about tech." />
        <div className=" hr-stroke" />
      </div>
      <div className="flex flex-col items-start py-4 space-y-4">
        <p className="text-xl">Content is not ready yet.</p>
        <p className="text-xl">
          <strong>ETA:</strong> about ~1 year from{' '}
          {`${dayjs(new Date()).format('MMMM DD, YYYY')}`}
        </p>
        <Image
          src="/static/images/under-construction.jpg"
          alt="Omar Alsoudani stack"
          width={2048}
          height={1357}
          layout="responsive"
        />
      </div>
    </article>
  )
}

export default Stack
