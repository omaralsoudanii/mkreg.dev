import { CenteredColumn } from '@/components/Layouts'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-4 py-32 lg:px-0">
      <CenteredColumn>
        <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-10 md:mt-24">
          <div className="py-6 space-x-2 md:space-y-6">
            <h1 className="text-6xl leading-loose text-gray-1000 dark:text-gray-50 md:text-8xl md:leading-loose border-gray-1000 md:dark:border-gray-50 md:border-r-8 md:py-28 md:px-6">
              404
            </h1>
          </div>
          <div className="max-w-md px-1 space-y-4 md:px-0">
            <h2 className="text-3xl md:text-4xl">
              I tried, but didn't find this page.
            </h2>
            <p className="text-lg md:text-xl">
              It seems that you're looking for something that used to exist, or
              you spelled something wrong.
            </p>
            <p className="pb-12 text-lg md:pb-0 md:text-xl">
              Don't feel bad about it, this happens to me all the time, just
              imagine you're trying to find some solution for a bug in PHP v5.6
              that exists since 2007, sadly the only link is a freaking 404
              forum thread.
            </p>
            <Link href="/" passHref>
              <a className="w-full text-lg btn btn-primary btn-large">
                Back to Homepage
              </a>
            </Link>
          </div>
        </div>
      </CenteredColumn>
    </div>
  )
}
