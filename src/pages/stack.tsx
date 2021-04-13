import Image from '@/components/ImageComposed'
import dayjs from 'dayjs'

function Stack() {
  return (
    <div className="container px-0 mx-auto leading-relaxed">
      <section className="mb-20 space-y-8">
        <h1>Stack</h1>
        <p>A list of what I know about tech. Content is not ready yet.</p>
        <p>
          <strong>ETA:</strong> about ~1 year from{' '}
          {`${dayjs(new Date()).format('MMMM DD, YYYY')}`}
        </p>
        <Image
          src="/static/images/under-construction.jpg"
          alt="Omar Alsoudani stack"
          width={2048}
          height={1357}
        />
      </section>
    </div>
  )
}

export default Stack
