import { CenteredColumn } from '@/components/Layouts'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-4 py-32 lg:px-0">
      <CenteredColumn>
        <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
          <div className="pt-6 pb-8 space-x-2 md:space-y-5">
            <h1 className="text-6xl font-bold leading-loose tracking-tight text-gray-1000 dark:text-gray-50 md:text-8xl md:leading-loose border-gray-1000 mk:dark:border-gray-50 md:border-r-8 md:px-6">
              404
            </h1>
          </div>
          <div className="max-w-md">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
              I tried, but didn't find this page.
            </p>
            <p className="mb-2">
              It seems that you're looking for something that used to exist, or
              you spelled something wrong.
            </p>
            <p className="mb-8">
              Don't feel bad about it, this happens to me all the time, just
              imagine you're trying to find some solution for a bug in PHP v5.6
              that exists since 2007, and the only link is not found as well.
            </p>
            <Link href="/">
              <button className="w-full text-lg btn btn-large">Homepage</button>
            </Link>
          </div>
        </div>
      </CenteredColumn>
    </div>
  )
}
