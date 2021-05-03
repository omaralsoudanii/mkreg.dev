import { Environment } from '@/lib/environment'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="mt-16 hr-stroke">
      <div className="grid items-start grid-cols-1 py-12 text-left md:gap-4 md:items-center md:text-center md:grid-cols-3 ">
        <div className="flex flex-col items-start px-4 mb-4 space-y-4 md:space-y-8 md:px-0 md:m-0 md:items-center">
          <Link href="/tags" passHref>
            <a>
              <p className="inline font-medium link-unstyled">Tags</p>
            </a>
          </Link>
          <Link href="/about" passHref>
            <a href="/about">
              <p className="inline font-medium link-unstyled">About</p>
            </a>
          </Link>
          <a
            href={`mailto:${Environment.social.mail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="inline font-medium link-unstyled">Contact</p>
          </a>
        </div>
        <div className="flex flex-col items-start px-4 mb-4 space-y-4 md:space-y-8 md:px-0 md:m-0 md:items-center">
          <a
            href={Environment.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="inline font-medium link-unstyled">Github</p>
          </a>
          <Link href="/nuggets" passHref>
            <a href="/nuggets">
              <p className="inline font-medium link-unstyled">Nuggets</p>
            </a>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Environment.social.linkedin}
          >
            <p className="inline font-medium link-unstyled">LinkedIn</p>
          </a>
        </div>
        <div className="flex flex-col items-start px-4 space-y-4 md:space-y-8 md:px-0 md:m-0 md:items-center">
          <a
            href={Environment.social.rss}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="inline font-medium link-unstyled">RSS</p>
          </a>
          <Link href="/writing" passHref>
            <a href="/writing">
              <p className="inline font-medium link-unstyled">Writing</p>
            </a>
          </Link>
          <a
            href={Environment.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="inline font-medium link-unstyled">Twitter</p>
          </a>
        </div>
      </div>
    </div>
  )
}
