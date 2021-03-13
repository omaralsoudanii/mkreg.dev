import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

const RoutesMetadata = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Writing',
    href: '/writing',
  },
  {
    label: 'Nuggets',
    href: '/nuggets',
  },
]

export default function Header() {
  const [mounted, setMounted] = React.useState(false)
  const [isExpanded, setExpanded] = React.useState(false)
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const currentRoute =
    router.pathname === '/'
      ? {
          href: '/',
          label: 'Home',
        }
      : RoutesMetadata.filter((r) => r.href !== '/').find((r) =>
          router.pathname.includes(r.href)
        ) ?? { href: router.asPath, label: 'MK' }
  React.useEffect(() => setMounted(true), [])

  return (
    mounted && (
      <div className="fixed top-0 z-10 w-full py-2">
        <div className="hdr-backdrop" />
        <div className="grid grid-cols-1 sm:hidden">
          <div className="flex items-center text-primary">
            {isExpanded ? (
              <div className="hdr-sm-btn" onClick={() => setExpanded(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            ) : (
              <div className="hdr-sm-btn" onClick={() => setExpanded(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            )}
            <Link href={currentRoute.href}>
              <a className="hdr-sm-title">
                <p className=" text-primary">{currentRoute.label}</p>
              </a>
            </Link>
            <div
              className="hdr-sm-btn"
              onClick={() => {
                isExpanded ? setExpanded(false) : null
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }}
            >
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </div>
          </div>
          {isExpanded &&
            RoutesMetadata.map((route) => {
              const navClass =
                route.href === router.pathname
                  ? 'flex items-start py-3 pl-4 text-primary nav-link active'
                  : 'flex items-start py-3 pl-4 text-primary nav-link'
              return (
                <Link href={route.href} key={route.href}>
                  <a onClick={() => setExpanded(false)} className={navClass}>
                    {route.label}
                  </a>
                </Link>
              )
            })}
        </div>

        <div className="hidden max-w-3xl grid-cols-4 gap-1 mx-auto sm:grid">
          {RoutesMetadata.map((route) => {
            const navClass =
              route.href === router.pathname ? 'nav-link active' : 'nav-link'
            return (
              <Link href={route.href} key={route.href}>
                <a className={navClass}>{route.label}</a>
              </Link>
            )
          })}
          <div
            className="hdr-cnt-theme-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    )
  )
}
