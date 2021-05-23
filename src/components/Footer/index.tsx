import { Environment } from '@/lib/environment'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="!w-full mx-auto mt-16 prose lg:prose-lg dark:prose-dark !max-w-none hr-stroke">
      <div className="grid items-start grid-cols-1 py-12 text-left footer lg:gap-4 lg:items-center lg:text-center lg:grid-cols-3 ">
        <div className="flex flex-col items-start px-4 mb-4 space-y-4 lg:space-y-8 lg:px-0 lg:m-0 lg:items-center">
          <Link href="/">
            <a className="font-medium link-lg link-unstyled">Home</a>
          </Link>
          <Link href="/tags">
            <a className="font-medium link-lg link-unstyled">Tags</a>
          </Link>
          <Link href="/stack">
            <a className="font-medium link-lg link-unstyled">Stack</a>
          </Link>
        </div>
        <div className="flex flex-col items-start px-4 mb-4 space-y-4 lg:space-y-8 lg:px-0 lg:m-0 lg:items-center">
          <a
            href={`mailto:${Environment.social.mail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-lg link-unstyled"
          >
            Contact
          </a>
          <a
            href={Environment.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-lg link-unstyled"
          >
            Github
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-lg link-unstyled"
            href={Environment.social.linkedin}
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-col items-start px-4 space-y-4 lg:space-y-8 lg:px-0 lg:m-0 lg:items-center">
          <a
            href={Environment.social.rss}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-lg link-unstyled"
          >
            RSS
          </a>
          <a
            href={Environment.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-lg link-unstyled"
          >
            Twitter
          </a>
          <a
            href={Environment.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-lg link-unstyled"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  )
}
