import { Environment } from '@/lib/environment'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mx-auto mt-16 prose md:prose-lg dark:prose-dark hr-stroke">
      <div className="grid items-start grid-cols-1 py-12 text-left footer md:gap-4 md:items-center md:text-center md:grid-cols-3 ">
        <div className="flex flex-col items-start px-4 mb-4 space-y-4 md:space-y-8 md:px-0 md:m-0 md:items-center">
          <Link href="/">
            <a className="inline font-medium footer-border link-unstyled">
              Home
            </a>
          </Link>
          <Link href="/tags">
            <a className="inline font-medium footer-border link-unstyled">
              Tags
            </a>
          </Link>

          <a
            href={`mailto:${Environment.social.mail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline font-medium footer-border link-unstyled"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col items-start px-4 mb-4 space-y-4 md:space-y-8 md:px-0 md:m-0 md:items-center">
          <a
            href={Environment.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline font-medium footer-border link-unstyled"
          >
            Github
          </a>
          <Link href="/nuggets">
            <a className="inline font-medium footer-border link-unstyled">
              Nuggets
            </a>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline font-medium footer-border link-unstyled"
            href={Environment.social.linkedin}
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-col items-start px-4 space-y-4 md:space-y-8 md:px-0 md:m-0 md:items-center">
          <a
            href={Environment.social.rss}
            target="_blank"
            rel="noopener noreferrer"
            className="inline font-medium footer-border link-unstyled"
          >
            RSS
          </a>
          <Link href="/writing">
            <a className="inline font-medium footer-border link-unstyled">
              Writing
            </a>
          </Link>
          <a
            href={Environment.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline font-medium footer-border link-unstyled"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
