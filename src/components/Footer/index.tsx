import { Environment } from '@/lib/environment'
import NextLink from '@/components/NextLink'

export default function Footer() {
  return (
    <footer className="mt-16 mx-auto w-full">
      <hr className="border-t border-gray-200 dark:border-gray-700" />
      <div className="footer-grid">
        <div className="footer-column">
          <NextLink className="link-unstyled" href="/">
            Home
          </NextLink>
          <NextLink className="link-unstyled" href="/writing">
            Writing
          </NextLink>
          <NextLink className="link-unstyled" href="/nuggets">
            Nuggets
          </NextLink>
        </div>
        <div className="footer-column">
          <NextLink href={Environment.social.github} className="link-unstyled">
            Github
          </NextLink>
          <NextLink
            href={`mailto:${Environment.social.mail}`}
            className="link-unstyled"
          >
            Contact
          </NextLink>
          <NextLink
            href={Environment.social.linkedin}
            className="link-unstyled"
          >
            LinkedIn
          </NextLink>
        </div>
        <div className="footer-column">
          <NextLink className="link-unstyled" href={Environment.social.rss}>
            RSS
          </NextLink>
          <NextLink href={Environment.social.twitter} className="link-unstyled">
            Twitter
          </NextLink>
          <NextLink href={Environment.social.youtube} className="link-unstyled">
            YouTube
          </NextLink>
        </div>
      </div>
    </footer>
  )
}
