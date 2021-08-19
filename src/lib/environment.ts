// Environment variables that can be used to override the defaults
const resolveBool = (
  value: string | undefined,
  defaultValue: boolean
): boolean => {
  if (!value) return defaultValue
  if (value === 'true') return true
  return false
}

const resolveNumber = (
  value: string | undefined,
  defaultValue: number
): number => {
  if (!value) return defaultValue
  return parseInt(value, 10)
}

interface EnvironmentProps {
  siteUrl: string
  NODE_ENV: string
  ogImage: string
  ogDescription: string
  ogTitle: string
  social: {
    github: string
    rss: string
    speedlify: string
    linkedin: string
    youtube: string
    twitter: string
  }
  isr: {
    enable: boolean
    maxNumberOfPosts: number
    revalidate: number
  }
}

export const Environment: EnvironmentProps = {
  siteUrl: process.env.SITE_URL ?? 'https://mkreg.dev',
  NODE_ENV: process.env.NODE_ENV ?? 'production',
  ogTitle: 'Omar Alsoudani',
  ogDescription: 'Software developer, creator and the king of laziness.',
  ogImage: '/static/images/mk.jpg',
  social: {
    github: process.env.GITHUB_URL ?? 'https://github.com/omaralsoudanii',
    rss: process.env.RSS_RELATIVE_URL ?? '/rss.xml',
    youtube:
      process.env.YOUTUBE_URL ??
      'https://www.youtube.com/channel/UCiYs0vL7tkkCK4yF_YhfyEQ/playlists',
    linkedin:
      process.env.LINKEDIN_URL ?? 'https://www.linkedin.com/in/omaralsoudani',
    speedlify:
      process.env.SPEEDLIFY_URL ?? 'https://mkreg-speedlify.netlify.app',
    twitter: process.env.TWITTER_URL ?? 'https://twitter.com/omaralsoudani',
  },
  isr: {
    enable: resolveBool(process.env.POSTS_ISR, true),
    maxNumberOfPosts: resolveNumber(process.env.POSTS_ISR_MAX_NUMBER_POSTS, 10),
    revalidate: resolveNumber(process.env.POSTS_ISR_REVALIDATE, 3600), // 1hour
  },
}
