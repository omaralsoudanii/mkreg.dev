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
    label: 'Nuggets',
    href: '/nuggets',
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
    <React.Fragment>
      <nav className="pb-28 lg:hidden">
        <div className="grid grid-cols-1 header-sm lg:hidden" ref={node}>
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
      </nav>
      <nav className="items-center justify-between hidden w-full max-w-3xl mx-auto mb-8 lg:flex header-lg">
        <a href="#skip" className="skip-content-nav">
          Skip to content
        </a>
        <div className="space-x-6">
          {RoutesMetadata.map((route) => {
            const navClass =
              route.href === router.pathname
                ? 'nav-md-default inline-block shadow-black dark:shadow-white'
                : 'nav-md-default  link-unstyled'
            return (
              <Link key={route.href} href={route.href}>
                <a className={navClass}>{route.label}</a>
              </Link>
            )
          })}
        </div>
        {mounted && (
          <div
            className="lg:hdr-cnt-theme-btn"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </div>
        )}
      </nav>
    </React.Fragment>
  )
}
