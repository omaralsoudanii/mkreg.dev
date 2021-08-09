import Link from 'next/link'

const NextLink = ({
  href,
  className = 'primary-link',
  prefetch,
  children,
}: {
  href: string
  className?: string
  prefetch?: boolean
  children: JSX.Element | (JSX.Element | string)[] | string
}): JSX.Element => {
  const Internal = href.startsWith('/') || href.startsWith('#')

  return Internal ? (
    <Link href={href} prefetch={prefetch}>
      <a className={className}>{children}</a>
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

export default NextLink
