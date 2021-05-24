import NextLink from '@/components/NextLink'
import NextImage from '@/components/NextImage'
import Card from '@/components/Card'
import { Github } from '@/components/Icons'

const iconClassName = 'w-12 h-12 lg:w-13 lg:h-13  min-w-sm fill-current'

const GithubCard = (card) => {
  const icon = Github({
    className: iconClassName,
  })
  return <Card {...card} icon={icon} />
}

const MDXComponents = {
  Image: NextImage,
  a: NextLink,
  GithubCard,
}

export default MDXComponents
