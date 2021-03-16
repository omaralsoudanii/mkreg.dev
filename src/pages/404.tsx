import { CenteredColumn } from '@/components/Layouts'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-4 py-8">
      <CenteredColumn>
        <div className="flex flex-col items-start justify-start sm:justify-center sm:items-center sm:flex-row sm:space-x-10 sm:mt-24">
          <div className="py-6 space-x-2 sm:space-y-6">
            <h1 className="text-6xl leading-loose sm:text-8xl sm:leading-loose border-gray-1000 sm:dark:border-gray-50 sm:border-r-8 sm:py-28 sm:px-6">
              404
            </h1>
          </div>
          <div className="max-w-md px-1 space-y-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl">
              I tried, but didn't find this page
            </h2>
            <p className="text-lg sm:text-xl">
              It seems that you're looking for something that used to exist, or
              you spelled something wrong.
            </p>
            <p className="pb-4 text-lg sm:pb-0 sm:text-xl">
              Don't feel bad about it, this happens to me all the time, just
              imagine you're trying to find some solution for a bug in PHP v5.6
              that exists since 2007, sadly the only link is a freaking 404
              forum thread.
            </p>
            <Link href="/">
              <a className="w-full text-lg btn-primary btn-large">
                Back to Homepage
              </a>
            </Link>
          </div>
        </div>
      </CenteredColumn>
    </div>
  )
}
