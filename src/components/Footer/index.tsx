import { CenteredColumn } from '@/components/Layouts'
import { Environment } from '@/lib/environment'
import Link from 'next/link'

export function Footer() {
  return (
    <CenteredColumn>
      <div className="px-4 mt-4 lg:px-0">
        <div className=" hr-stroke" />
        <div className="grid grid-cols-1 gap-4 p-6 py-12 sm:grid-cols-3 ">
          <div className="flex flex-col space-y-4 text-center">
            <a
              href={Environment.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Environment.social.linkedin}
              className="black-link"
            >
              LinkedIn
            </a>
            <a
              href={Environment.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              Youtube
            </a>
          </div>
          <div className="flex flex-col space-y-4 text-center">
            <a
              href={Environment.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              Twitter
            </a>
            <Link href="/writing">
              <a href="/writing" className="black-link">
                Writing
              </a>
            </Link>
            <Link href="/nuggets">
              <a href="/nuggets" className="black-link">
                Nuggets
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4 text-center">
            <a
              href={Environment.social.rss}
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              RSS
            </a>
            <Link href="/tags">
              <a className="black-link">Tags</a>
            </Link>
            <a
              href={`mailto:${Environment.social.mail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </CenteredColumn>
  )
}
