import { Environment } from '@/lib/environment'
import SvgGmail from '@/components/Icons/Gmail'
import SvgLinkedin from '@/components/Icons/Linkedin'
import SvgYoutube from '@/components/Icons/Youtube'
import SvgGithub from '@/components/Icons/Github'
import SvgRss from '@/components/Icons/Rss'
import SvgTwitter from '@/components/Icons/Twitter'
import NextLink from '@/components/NextLink'

export default function Footer() {
  const iconStyle =
    'svg-fill text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 h-6 w-6'
  return (
    <footer>
      <div className="flex flex-col items-center mt-20">
        <div className="flex mb-4 space-x-4">
          <NextLink
            className="no-underline"
            href={`mailto:${Environment.social.mail}`}
          >
            <span className="sr-only">mail</span>
            <SvgGmail className={iconStyle} />
          </NextLink>
          <NextLink className="no-underline" href={Environment.social.linkedin}>
            <span className="sr-only">LinkedIn</span>
            <SvgLinkedin className={iconStyle} />
          </NextLink>
          <NextLink className="no-underline" href={Environment.social.github}>
            <span className="sr-only">GitHub</span>
            <SvgGithub className={iconStyle} />
          </NextLink>
          <NextLink className="no-underline" href={Environment.social.rss}>
            <span className="sr-only">RSS</span>
            <SvgRss className={iconStyle} />
          </NextLink>
          <NextLink className="no-underline" href={Environment.social.youtube}>
            <span className="sr-only">YouTube</span>
            <SvgYoutube className={iconStyle} />
          </NextLink>
          <NextLink className="no-underline" href={Environment.social.twitter}>
            <span className="sr-only">Twitter</span>
            <SvgTwitter className={iconStyle} />
          </NextLink>
        </div>
        <div className="flex space-x-2 mb-8  font-medium text-sm text-gray-500 dark:text-gray-400">
          <div>{Environment.ogTitle}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>MK</div>
        </div>
      </div>
    </footer>
  )
}
