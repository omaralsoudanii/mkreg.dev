import { Container } from '@/components/Container'
import Image from '@/components/ImageComposed'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-start sm:justify-center sm:items-center sm:space-x-10 sm:mt-8">
        <div className="px-1 space-y-8 sm:px-0">
          <h1 className="sm:pt-0">Internal server error</h1>
          <p className="pb-2">
            The server is currently unavailable for some reason. Obviously, it's
            not my fault, I ran the code on my machine and it's working fine.
            Try refreshing the page again, if that doesn't work, contact me and
            I will send you a zip file, just extract it and double click
            index.html
          </p>
          <Image
            src="/static/images/docker.jpeg"
            width={604}
            height={403}
            alt="500 Internal server error"
          />

          <Link href="/">
            <a className="w-full btn btn-primary btn-large">Back to Homepage</a>
          </Link>
        </div>
      </div>
    </Container>
  )
}
