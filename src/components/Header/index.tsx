import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons'
import RoutesMetadata from '@/lib/RoutesMetadata'

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()

  const [isExpanded, setExpanded] = React.useState(false)
  const onToggleNav = () => {
    setExpanded((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
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
      <nav className="grid grid-cols-1 header-sm sm:hidden">
        <div className="flex items-center">
          {isExpanded ? (
            <div className="hdr-sm-btn" onClick={onToggleNav}>
              <CloseIcon />
            </div>
          ) : (
            <div className="hdr-sm-btn" onClick={onToggleNav}>
              <MenuIcon />
            </div>
          )}
          <Link href={currentRoute.href}>
            <a onClick={onToggleNav} className="hdr-sm-title">
              {currentRoute.label}
            </a>
          </Link>
          <div
            className="hdr-sm-btn"
            onClick={() => {
              isExpanded ? setExpanded(false) : null
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }}
          >
            {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </div>
        </div>
        {isExpanded &&
          RoutesMetadata.map((route) => {
            const navClass =
              route.href === router.pathname ??
              router.pathname.includes(route.href)
                ? 'flex pl-6 nav-default nav-active'
                : 'flex pl-6 nav-default nav-inactive'
            return (
              <Link href={route.href} key={route.href}>
                <a onClick={onToggleNav} className={navClass}>
                  {route.label}
                </a>
              </Link>
            )
          })}
      </nav>
      <nav className="hidden sm:flex sm:items-center sm:text-base sm:leading-5">
        <div className="hidden sm:block">
          {RoutesMetadata.map((link) => (
            <Link key={link.label} href={link.href}>
              <a className="font-medium link-unstyled sm:my-2 sm:py-2 sm:px-4">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        <div
          className="hidden sm:block sm:hdr-cnt-theme-btn"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </div>
      </nav>
    </React.Fragment>
  )
}
