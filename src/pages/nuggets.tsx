import Image from '@/components/ImageComposed'
import dayjs from 'dayjs'

function Nuggets() {
  return (
    <div className="container mx-auto leading-relaxed">
      <section className="mb-20 space-y-8">
        <h1>Nuggets</h1>
        <p>
          Some stuff I bookmark and never read again. Content is not ready yet.
        </p>
        <p>
          <strong>ETA:</strong> about ~1 year from{' '}
          {`${dayjs(new Date()).format('MMMM DD, YYYY')}`}
        </p>
        <Image
          src="/static/images/under-construction.jpg"
          alt="Omar Alsoudani bookmarks"
          width={2048}
          height={1357}
        />
      </section>
    </div>
  )
}

export default Nuggets
