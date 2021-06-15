import ProseLayout from '@/components/Layouts/ProseLayout'
import NextImage from '@/components/NextImage'
import SectionContainer from '@/components/SectionContainer'
import Link from 'next/link'

export default function ServerError() {
  return (
    <SectionContainer>
      <ProseLayout>
        <div className="flex flex-col items-start justify-start lg:justify-center lg:items-center lg:space-x-10 lg:mt-8">
          <div className="px-1 lg:px-0">
            <h1 className="lg:pt-0">Internal server error</h1>
            <p>
              The server is currently unavailable for some reason. Obviously,
              it's not my fault, I ran the code on my machine and it's working
              fine. Try refreshing the page again, if that doesn't work, contact
              me and I will send you a zip file, just extract it and double
              click <strong>index_v17_final.html</strong>
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
      </ProseLayout>
    </SectionContainer>
  )
}
