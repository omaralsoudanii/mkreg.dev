import { Environment } from '@/lib/environment'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="mt-16 hr-stroke">
      <div className="grid grid-cols-1 gap-4 p-6 py-12 text-left sm:text-center sm:grid-cols-3 ">
        <div className="flex flex-col space-y-4">
          <a
            href={`mailto:${Environment.social.mail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            Contact
          </a>
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
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/tags">
            <a className="black-link">Tags</a>
          </Link>
          <Link href="/nuggets">
            <a href="/nuggets" className="black-link">
              Nuggets
            </a>
          </Link>

          <Link href="/writing">
            <a href="/writing" className="black-link">
              Writing
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <a
            href={Environment.social.rss}
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            RSS
          </a>
          <Link href="/about">
            <a href="/about" className="black-link">
              About
            </a>
          </Link>
          <a
            href={Environment.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  )
}
