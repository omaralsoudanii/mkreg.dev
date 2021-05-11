import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons'

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
    label: 'Stack',
    href: '/stack',
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
  const handleClickOutside = (e: { target: any }) => {
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
    <nav className="md:header-default header-default header-container">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="grid grid-cols-1 md:hidden" ref={node}>
        <div className="flex items-center">
          {isExpanded ? (
            <div className="hdr-sm-btn" onClick={() => setExpanded(false)}>
              <CloseIcon />
            </div>
          ) : (
            <div className="hdr-sm-btn" onClick={() => setExpanded(true)}>
              <MenuIcon />
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
              {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
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

      <ul className="hidden app md:space-x-3 md:flex md:flex-row">
        {RoutesMetadata.map((route) => {
          const navClass =
            route.href === router.pathname
              ? 'nav-md-default border-b-2 border-gray-900 dark:border-gray-50'
              : 'nav-md-default hover:border-b-2 hover:border-gray-900 dark:hover:border-gray-50'
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
          {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </div>
      )}
    </nav>
  )
}
