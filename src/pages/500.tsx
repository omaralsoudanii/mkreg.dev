import Link from 'next/link'
import Image from '@/components/ImageComposed'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-start sm:justify-center sm:items-center sm:space-x-10 sm:mt-8">
        <div className="px-1 space-y-8 sm:px-0">
          <h1 className="font-bold text-primary sm:pt-0">
            Internal server error
          </h1>
          <p className="pb-8 text-xl">
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

          <p>
            <Link href="/">
              <a>&larr; Back to homepage </a>
            </Link>
          </p>
        </div>
      </div>
    </Container>
  )
}
