import { CenteredColumn } from '@/components/Layouts'
import { Environment } from '@/environment'
import Link from 'next/link'

export function Footer() {
  return (
    <CenteredColumn>
      <div className="px-4 mt-4 lg:px-0">
        <div className=" hr-stroke" />
        <div className="grid grid-cols-1 gap-4 px-6 py-16 sm:grid-cols-3 bg-gray-50 dark:bg-gray-1000">
          <div className="flex flex-col space-y-4 sm:text-center">
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
          <div className="flex flex-col space-y-4 sm:text-center">
            <a
              href={Environment.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              Twitter
            </a>
            <Link href="/writing" as="/writing" passHref>
              <a href="/writing" className="black-link">
                Writing
              </a>
            </Link>
            <Link href="/nuggets" as="/nuggets" passHref>
              <a href="/nuggets" className="black-link">
                Nuggets
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4 sm:text-center">
            <a
              href={Environment.social.rss}
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              RSS
            </a>
            <Link href="/uses" as="/uses" passHref>
              <a className="black-link">Uses</a>
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
