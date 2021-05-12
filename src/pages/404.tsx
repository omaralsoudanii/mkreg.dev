import { Container } from '@/components/Container'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-10 md:mt-8">
        <div className="pt-4 space-x-2 md:space-y-6">
          <h1 className="text-6xl leading-loose border-gray-1000 md:text-8xl md:leading-loose md:dark:border-gray-100 md:border-r-8 md:py-24 md:px-6">
            404
          </h1>
        </div>
        <Container>
          <h1>I tried but didn't find this page</h1>
          <p>
            It seems that you're looking for something that used to exist, or
            you spelled something wrong.
          </p>
          <p>
            Don't feel bad about it, this happens to me all the time, just
            imagine you're trying to find some solution for a bug in PHP v5.6
            that exists since 2007, sadly the only link is a freaking 404 forum
            thread.
          </p>
          <Link href="/" passHref>
            <button className="w-full btn btn-primary btn-large">
              Back to Homepage
            </button>
          </Link>
        </Container>
      </div>
    </div>
  )
}
