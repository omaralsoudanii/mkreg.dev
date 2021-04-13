import { Container } from '@/components/Container'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-start px-4 py-4 justify-start sm:justify-center sm:items-center sm:flex-row sm:space-x-10 sm:mt-8">
        <div className="pt-4 space-x-2 sm:space-y-6">
          <h1 className="text-6xl leading-loose border-gray-900 sm:text-8xl sm:leading-loose sm:dark:border-gray-100 sm:border-r-8 sm:py-24 sm:px-6">
            404
          </h1>
        </div>
        <h1>I tried but didn't find this page</h1>
        <p>
          It seems that you're looking for something that used to exist, or you
          spelled something wrong.
        </p>
        <p>
          Don't feel bad about it, this happens to me all the time, just imagine
          you're trying to find some solution for a bug in PHP v5.6 that exists
          since 2007, sadly the only link is a freaking 404 forum thread.
        </p>
        <Link href="/">
          <a className="w-full text-lg btn btn-primary btn-large">
            Back to Homepage
          </a>
        </Link>
      </div>
    </Container>
  )
}
