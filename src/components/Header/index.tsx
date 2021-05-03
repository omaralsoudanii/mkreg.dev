import * as React from 'react'
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
    label: 'Stack',
    href: '/stack',
  },
  {
    label: 'Writing',
    href: '/writing',
  },
]

export default function Header() {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [isExpanded, setExpanded] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])
  const node = React.useRef(null)
  const handleClickOutside = (e) => {
    if (node && node.current && node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setExpanded(false)
  }

  const router = useRouter()
  const currentRoute =
    router.pathname === '/'
      ? {
          href: '/',
          label: 'Home',
        }
      : RoutesMetadata.filter((r) => r.href !== '/').find((r) =>
          router.pathname.includes(r.href)
        ) ?? { href: router.asPath, label: 'MK' }

  return (
    <div className="md:header-default header-default header-container">
      <div className="grid grid-cols-1 md:hidden" ref={node}>
        <div className="flex items-center">
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
            <a onClick={() => setExpanded(false)} className="hdr-sm-title">
              {currentRoute.label}
            </a>
          </Link>
          {mounted && (
            <div
              className="hdr-sm-btn"
              onClick={() => {
                isExpanded ? setExpanded(false) : null
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }}
            >
              {resolvedTheme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          )}
        </div>
        {isExpanded &&
          RoutesMetadata.map((route) => {
            const navClass =
              route.href === router.pathname ??
              router.pathname.includes(route.href)
                ? 'flex pl-6  nav-default nav-active'
                : 'flex pl-6  nav-default nav-inactive'
            return (
              <Link href={route.href} key={route.href}>
                <a onClick={() => setExpanded(false)} className={navClass}>
                  {route.label}
                </a>
              </Link>
            )
          })}
      </div>

      <ul className="hidden max-w-2xl mx-auto md:max-w-3xl md:space-x-3 md:flex md:flex-row">
        {RoutesMetadata.map((route) => {
          const navClass =
            route.href === router.pathname
              ? 'nav-md-default border-b-2 border-gray-1000 dark:border-gray-50'
              : 'nav-md-default hover:border-b-2 hover:border-gray-1000 dark:hover:border-gray-50'
          return (
            <li key={route.href}>
              <Link href={route.href}>
                <a className={navClass}>{route.label}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      {mounted && (
        <div
          className="hidden md:hdr-cnt-theme-btn md:inline"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {resolvedTheme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </div>
      )}
    </div>
  )
}
