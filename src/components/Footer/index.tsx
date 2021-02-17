import React from 'react'
import Link from 'next/link'
import { CenteredColumn } from '../Layouts'

export function Footer() {
  return (
    <CenteredColumn>
      <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke">
        <div className="grid grid-cols-1 gap-4 p-6 py-8 bg-gray-100 sm:grid-cols-3 dark:bg-gray-900 sm:bg-gray-50 sm:dark:bg-gray-1000">
          <div className="flex flex-col space-y-4 sm:text-center">
            <a
              href="https://github.com/omaralsoudani"
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/omaralsoudani"
              className="black-link"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/channel/UCiYs0vL7tkkCK4yF_YhfyEQ/playlists"
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              Youtube
            </a>
          </div>
          <div className="flex flex-col space-y-4 sm:text-center">
            <Link href="/writings" as="/writings" passHref>
              <a href="/writings" className="black-link">
                Writings
              </a>
            </Link>
            <Link href="/resourcecs" as="/resourcecs" passHref>
              <a href="/resourcecs" className="black-link">
                Resources
              </a>
            </Link>
            <Link href="/snippets" as="/snippets" passHref>
              <a href="/snippets" className="black-link">
                Snippets
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4 sm:text-center">
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              RSS
            </a>
            <Link href="/uses" as="/uses" passHref>
              <a className="black-link">Uses</a>
            </Link>
            <Link href="/about" as="/about" passHref>
              <a href="/about" className="black-link">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    </CenteredColumn>
  )
}
