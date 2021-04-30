import { Container } from '@/components/Container'
import NextImage from '@/components/NextImage'
import Link from 'next/link'

export default function ServerError() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:space-x-10 md:mt-8">
        <div className="px-1 space-y-8 md:px-0">
          <h1 className="md:pt-0">Internal server error</h1>
          <p className="pb-8">
            The server is currently unavailable for some reason. Obviously, it's
            not my fault, I ran the code on my machine and it's working fine.
            Try refreshing the page again, if that doesn't work, contact me and
            I will send you a zip file, just extract it and double click{' '}
            <strong>index_v17_final.html</strong>
          </p>
          <NextImage
            src="/static/images/docker.jpeg"
            width={604}
            height={403}
            alt="500 Internal server error"
          />

          <Link href="/" passHref>
            <button className="w-full btn btn-primary btn-large">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
