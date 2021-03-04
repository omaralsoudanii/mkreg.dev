export const ghostAPIUrl = process.env.GHOST_API_URL
export const ghostAPIKey = process.env.GHOST_API_KEY

const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

// Environment variables that can be used to override the defaults
const resolveBool = (value: string | undefined, defaultValue: boolean) => {
  if (!value) return defaultValue
  if (value === 'true') return true
  return false
}

const resolveNumber = (value: string | undefined, defaultValue: number) => {
  if (!value) return defaultValue
  return parseInt(value, 10)
}

export interface EnvironmentProps {
  siteUrl: string
  writingUrl: string
  ghostAPIUrl: string
  NODE_ENV: string
  ogImage: string
  ogDescription: string
  ogTitle: string
  nextImages: {
    feature: boolean
    inline: boolean
    quality: number
    source: boolean
  }
  social: {
    github: string
    rss: string
    linkedin: string
    youtube: string
    mail: string
    twitter: string
  }
  rssTTL: number
  fileCache: boolean
  prism: {
    enable: boolean
    ignoreMissing: boolean
  }
  isr: {
    enable: boolean
    maxNumberOfPosts: number
    revalidate: number
  }
}

export const Environment: EnvironmentProps = {
  siteUrl,
  writingUrl: `${siteUrl}/writing`,
  ghostAPIUrl,
  NODE_ENV: process.env.NODE_ENV || 'development',
  ogTitle: 'Omar Alsoudani',
  ogDescription: 'My personal website',
  ogImage: '/static/meta/og-card.jpg',
  fileCache: resolveBool(process.env.GHOST_FILE_CACHE, true),
  social: {
    github: process.env.GITHUB_URL || 'https://github.com/omaralsoudanii',
    rss: process.env.RSS_RELATIVE_URL || '/rss.xml',
    youtube:
      process.env.YOUTUBE_URL ||
      'https://www.youtube.com/channel/UCiYs0vL7tkkCK4yF_YhfyEQ/playlists',
    linkedin:
      process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/omaralsoudani',
    mail: process.env.EMAIL_ADDR || 'omaralsoudani@gmail.com',
    twitter: process.env.TWITTER_URL || 'https://twitter.com/omaralsoudani',
  },
  nextImages: {
    feature: resolveBool(process.env.GHOST_FEATURE_IMAGES, true),
    inline: resolveBool(process.env.GHOST_INLINE_IMAGES, true),
    quality: resolveNumber(process.env.GHOST_IMAGES_QUALITY, 75),
    source: resolveBool(process.env.GHOST_SOURCE_IMAGES, false),
  },
  rssTTL: resolveNumber(process.env.RSS_FEED, 3600), // 1hour
  prism: {
    enable: resolveBool(process.env.PRISM, true),
    ignoreMissing: resolveBool(process.env.PRISM_IGNORE_MISSING, true),
  },
  isr: {
    enable: resolveBool(process.env.GHOST_ISR, true),
    maxNumberOfPosts: resolveNumber(process.env.GHOST_ISR_MAX_NUMBER_POSTS, 10),
    revalidate: resolveNumber(process.env.GHOST_ISR_REVALIDATE, 3600), // 1hour
  },
}
