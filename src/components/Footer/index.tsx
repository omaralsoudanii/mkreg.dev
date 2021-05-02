import { Environment } from '@/lib/environment'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="mt-16 hr-stroke">
      <div className="grid items-start grid-cols-1 gap-4 py-12 text-left md:items-center md:text-center md:grid-cols-3 ">
        <div className="flex flex-col items-start px-2 space-y-4 md:px-0 md:items-center">
          <a
            href={`mailto:${Environment.social.mail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="inline link-unstyled">Contact</p>
          </a>
          <a
            href={Environment.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="inline link-unstyled">Github</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Environment.social.linkedin}
          >
            <p className="inline link-unstyled">LinkedIn</p>
          </a>
        </div>
        <div className="flex flex-col items-start px-2 space-y-4 md:px-0 md:items-center">
          <Link href="/tags" passHref>
            <a>
              <p className="inline link-unstyled">Tags</p>
            </a>
          </Link>
          <Link href="/nuggets" passHref>
            <a href="/nuggets">
              <p className="inline link-unstyled">Nuggets</p>
            </a>
          </Link>

          <Link href="/writing" passHref>
            <a href="/writing">
              <p className="inline link-unstyled">Writing</p>
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-start px-2 space-y-4 md:px-0 md:items-center">
          <a
            href={Environment.social.rss}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="inline link-unstyled">RSS</p>
          </a>
          <Link href="/about" passHref>
            <a href="/about">
              <p className="inline link-unstyled">About</p>
            </a>
          </Link>
          <a
            href={Environment.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="inline link-unstyled">Twitter</p>
          </a>
        </div>
      </div>
    </div>
  )
}
