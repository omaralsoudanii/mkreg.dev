import NextLink from 'next/link'

const Link = ({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: JSX.Element | (JSX.Element | string)[] | string
}): JSX.Element => {
  const Internal = href.startsWith('/') || href.startsWith('#')

  return Internal ? (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
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

export default Link
