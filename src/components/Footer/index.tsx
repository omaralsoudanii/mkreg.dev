import { Environment } from '@/lib/environment'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-screen-sm px-6 mx-auto mt-12 mb-16 lg:px-0 lg:max-w-screen-lg">
      <div className="grid items-start w-full grid-cols-1 py-12 text-left dark:prose-dark lg:prose-lg hr-stroke lg:gap-4 lg:items-center lg:text-center lg:grid-cols-3 ">
        <div className="flex flex-col items-start px-2 mb-8 space-y-8 lg:px-0 lg:m-0 lg:items-center">
          <Link href="/">
            <a className="link-unstyled">Home</a>
          </Link>
          <Link href="/tags">
            <a className="link-unstyled">Tags</a>
          </Link>
          <Link href="/writing">
            <a className="link-unstyled">Writing</a>
          </Link>
        </div>
        <div className="flex flex-col items-start px-2 mb-8 space-y-8 lg:space-y-8 lg:px-0 lg:m-0 lg:items-center">
          <a
            href={`mailto:${Environment.social.mail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-unstyled"
          >
            Contact
          </a>
          <a
            href={Environment.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-unstyled"
          >
            Github
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="link-unstyled"
            href={Environment.social.linkedin}
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-col items-start px-2 space-y-8 lg:space-y-8 lg:px-0 lg:m-0 lg:items-center">
          <a
            href={Environment.social.rss}
            target="_blank"
            rel="noopener noreferrer"
            className="link-unstyled"
          >
            RSS
          </a>
          <a
            href={Environment.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="link-unstyled"
          >
            Twitter
          </a>
          <a
            href={Environment.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="link-unstyled"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  )
}
