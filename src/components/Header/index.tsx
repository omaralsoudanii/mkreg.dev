import * as React from 'react'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'

import RoutesMetadata from '@/lib/RoutesMetadata'

import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons'

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), [])
  const [isExpanded, setExpanded] = React.useState(false)
  const router = useRouter()
  const routerName = router.pathname
  const routerPath = router.asPath
  const currentRoute =
    routerName === '/'
      ? {
          href: '/',
          label: 'Home',
        }
      : RoutesMetadata.filter((r) => r.href !== '/').find((r) =>
          routerName.includes(r.href)
        ) ?? { href: routerPath, label: 'MK' }

  return (
    <React.Fragment>
      <nav className="grid grid-cols-1 header-sm md:hidden">
        <div className="flex items-center">
          <div className="hdr-sm-btn" onClick={() => setExpanded(!isExpanded)}>
            {isExpanded ? <CloseIcon /> : <MenuIcon />}
          </div>

          <Link href={currentRoute.href}>
            <a onClick={() => setExpanded(false)} className="hdr-sm-title">
              {currentRoute.label}
            </a>
          </Link>
          <div
            className="hdr-sm-btn"
            onClick={() => {
              setExpanded(false)
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }}
          >
            {mounted && (resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />)}
          </div>
        </div>
        {isExpanded &&
          RoutesMetadata.map((route) => {
            const navClass =
              route.href === routerName ?? routerName.includes(route.href)
                ? 'flex pl-6 nav-default nav-active'
                : 'flex pl-6 nav-default nav-inactive'
            return (
              <Link href={route.href} key={route.href}>
                <a onClick={() => setExpanded(false)} className={navClass}>
                  {route.label}
                </a>
              </Link>
            )
          })}
      </nav>
      <nav className="hidden md:flex md:items-center md:text-base md:mr-24 md:leading-5">
        <div className="hidden md:block">
          {RoutesMetadata.map((link) => (
            <Link key={link.label} href={link.href}>
              <a className="font-medium link-unstyled md:my-2 md:py-2 mx-2 md:px-2">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        <div
          className="hidden md:block md:hdr-cnt-theme-btn"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />)}
        </div>
      </nav>
    </React.Fragment>
  )
}
