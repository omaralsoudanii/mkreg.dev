import Link from 'next/link'

import NextImage from '@/components/NextImage'

export default function ServerError() {
  return (
    <div
      id="skip"
      className="prose dark:prose-dark md:prose-lg w-full max-w-none md:max-w-[75ch] mx-auto"
    >
      <div className="flex flex-col justify-center items-center md:space-x-10 md:mt-8">
        <div className="px-1 md:px-0">
          <header>
            <h1 className="page-heading md:pt-0">Internal server error</h1>
          </header>
          <p>
            The server is currently unavailable for some reason. Obviously, it's
            not my fault, I ran the code on my machine and it's working fine.
            Try refreshing the page again, if that doesn't work, contact me and
            I will send you a zip file, just extract it and double click{' '}
            <strong>index_v17_final.html</strong>
          </p>
          <figure className="!my-8">
            <NextImage
              src="/static/images/docker.jpeg"
              width={604}
              height={403}
              alt="500 Internal server error"
            />
          </figure>

          <Link href="/" passHref>
            <button className="w-full my-8 btn btn-primary btn-large">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
