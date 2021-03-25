import { CenteredColumn } from '@/components/Layouts'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="px-4 py-8">
      <CenteredColumn>
        <div className="flex flex-col items-start justify-start sm:justify-center sm:items-center sm:space-x-10 sm:mt-24">
          <div className="max-w-md px-1 space-y-8 sm:px-0">
            <h1 className="pt-16 text-heading-1 sm:pt-0">
              Internal server error
            </h1>
            <p className="pb-8 text-p-2">
              The server is currently unavailable for some reason. Obviously
              it's not my fault, I ran the code on my machine and it's working
              fine. Try refreshing the page again, if that doesn't work, contact
              me and I will send you a zip file, just extract it and double
              click index.html
            </p>
            <Image
              src="/static/images/docker.jpeg"
              width="604"
              height="453"
              layout="responsive"
              quality={80}
            />

            <Link href="/">
              <a className="w-full text-lg btn btn-primary btn-large">
                Is this gonna work? 🤔
              </a>
            </Link>
          </div>
        </div>
      </CenteredColumn>
    </div>
  )
}
