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

  React.useEffect(() => setMounted(true), [])
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
        )

  return (
    <div className="fixed top-0 z-10 w-full py-2">
      <div className="hdr-backdrop" />
      {/* Mobile nav */}
      <div className="grid grid-cols-1 sm:hidden">
        <div className="flex items-center text-primary">
          {isExpanded ? (
            <div
              className="hdr-sm-btn sm-close-btn"
              onClick={() => setExpanded(false)}
            >
              ×
            </div>
          ) : (
            <div className="hdr-sm-btn" onClick={() => setExpanded(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 2.75C1 2.55109 1.07902 2.36032 1.21967 2.21967C1.36032 2.07902 1.55109 2 1.75 2H14.25C14.4489 2 14.6397 2.07902 14.7803 2.21967C14.921 2.36032 15 2.55109 15 2.75C15 2.94891 14.921 3.13968 14.7803 3.28033C14.6397 3.42098 14.4489 3.5 14.25 3.5H1.75C1.55109 3.5 1.36032 3.42098 1.21967 3.28033C1.07902 3.13968 1 2.94891 1 2.75ZM1 7.75C1 7.55109 1.07902 7.36032 1.21967 7.21967C1.36032 7.07902 1.55109 7 1.75 7H14.25C14.4489 7 14.6397 7.07902 14.7803 7.21967C14.921 7.36032 15 7.55109 15 7.75C15 7.94891 14.921 8.13968 14.7803 8.28033C14.6397 8.42098 14.4489 8.5 14.25 8.5H1.75C1.55109 8.5 1.36032 8.42098 1.21967 8.28033C1.07902 8.13968 1 7.94891 1 7.75ZM1.75 12C1.55109 12 1.36032 12.079 1.21967 12.2197C1.07902 12.3603 1 12.5511 1 12.75C1 12.9489 1.07902 13.1397 1.21967 13.2803C1.36032 13.421 1.55109 13.5 1.75 13.5H14.25C14.4489 13.5 14.6397 13.421 14.7803 13.2803C14.921 13.1397 15 12.9489 15 12.75C15 12.5511 14.921 12.3603 14.7803 12.2197C14.6397 12.079 14.4489 12 14.25 12H1.75Z"
                ></path>
              </svg>
            </div>
          )}
          <Link href={currentRoute.href}>
            <a className="hdr-sm-title">
              <p className=" text-primary">{currentRoute.label}</p>
            </a>
          </Link>
          {mounted && (
            <div
              className="hdr-sm-btn"
              onClick={() => {
                isExpanded ? setExpanded(false) : null
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                width="23"
                height="23"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            </div>
          )}
        </div>
        {isExpanded &&
          RoutesMetadata.map((route) => {
            const navClass =
              route.href === router.pathname
                ? 'flex items-start py-3 pl-4 text-primary nav-link active'
                : 'flex items-start py-3 pl-4 text-primary nav-link'
            return (
              <Link href={route.href} key={route.href}>
                <a className={navClass}>{route.label}</a>
              </Link>
            )
          })}
      </div>
      {/* End mobile nav */}

      {/* Desktop nav */}
      <div className="hidden max-w-2xl grid-cols-4 gap-1 mx-auto sm:grid">
        {RoutesMetadata.map((route) => {
          const navClass =
            route.href === router.pathname ? 'nav-link active' : 'nav-link'
          return (
            <Link href={route.href} key={route.href}>
              <a className={navClass}>{route.label}</a>
            </Link>
          )
        })}
        {mounted && (
          <div
            className="hdr-cnt-theme-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              width="24"
              height="24"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </div>
        )}
        {/* End desktop nav */}
      </div>
    </div>
  )
}
