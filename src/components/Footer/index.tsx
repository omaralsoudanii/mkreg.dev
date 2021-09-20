import NextLink from '@/components/NextLink'
import { Environment } from '@/lib/environment'

export default function Footer() {
  return (
    <footer className='mt-16 mx-auto w-full'>
      <hr className='border-t border-gray-200 dark:border-gray-700' />
      <div className='grid grid-cols-1  py-12 md:gap-12 m-auto md:items-start md:grid-cols-3'>
        <div className='flex flex-col items-start  space-y-8 py-4 px-2 md:items-center'>
          <NextLink className='link-unstyled' href='/'>
            Home
          </NextLink>
          <NextLink className='link-unstyled' href='/about'>
            About
          </NextLink>
          <NextLink className='link-unstyled' href='/writing'>
            Writing
          </NextLink>
        </div>
        <div className='flex flex-col items-start space-y-8 py-4 px-2 md:items-center'>
          <NextLink href={Environment.social.github} className='link-unstyled'>
            Github
          </NextLink>
          <NextLink href={Environment.social.twitter} className='link-unstyled'>
            Twitter
          </NextLink>
          <NextLink href={Environment.social.linkedin} className='link-unstyled'>
            LinkedIn
          </NextLink>
        </div>
        <div className='flex flex-col items-start space-y-8 py-4 px-2 md:items-center'>
          <NextLink
            className='link-unstyled'
            prefetch={false}
            href={`${Environment.siteUrl}${Environment.social.rss}`}
          >
            RSS
          </NextLink>
          <NextLink className='link-unstyled' href='/nuggets'>
            Nuggets
          </NextLink>
          <NextLink href={Environment.social.youtube} className='link-unstyled'>
            YouTube
          </NextLink>
        </div>
      </div>
    </footer>
  )
}
