import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      id='skip'
      className='prose dark:prose-dark lg:prose-lg w-full max-w-none lg:max-w-[75ch] mx-auto'
    >
      <div className='flex flex-col items-start justify-start divide-y divide-gray-700 dark:divide-gray-200 md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:my-20'>
        <div className='py-4 md:pt-20 md:pb-20'>
          <h1 className='md:border-gray-900 !text-7xl !leading-loose md:ml-0 !mb-0 px-2 md:border-r-2 md:dark:border-gray-100 md:pr-6 md:pl-0'>
            404
          </h1>
        </div>
        <div className='py-4 md:!py-0 !my-0 max-w-lg'>
          <h1 className='!my-0'>I tried but didn't find this page</h1>
          <p>
            It seems that you're looking for something that used to exist, or you spelled something
            wrong.
          </p>
          <p>
            Don't feel bad about it, this happens to me all the time, just imagine you're trying to
            find some solution for a bug in PHP v5.6 that exists since 2007, sadly the only link is
            a freaking 404 forum thread.
          </p>
          <Link href='/' passHref>
            <button className='w-full btn btn-primary btn-large'>Back to Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
