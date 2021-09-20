import Link from 'next/link'

const NextLink = ({
  href,
  className = 'primary-link',
  prefetch,
  children,
  ...props
}: {
  href: string
  className?: string
  prefetch?: boolean
  children: JSX.Element | (JSX.Element | string)[] | string
  props?: any
}): JSX.Element => {
  const Internal = href.startsWith('/')
  const Hashed = href.startsWith('#')

  return Internal ? (
    <Link href={href} prefetch={prefetch}>
      <a className={className}>{children}</a>
    </Link>
  ) : Hashed ? (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ) : (
    <a href={href} target='_blank' rel='noopener noreferrer' className={className}>
      {children}
    </a>
  )
}

export default NextLink
