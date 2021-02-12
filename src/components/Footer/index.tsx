import React from 'react'
import Link from 'next/link'
import { CenteredColumn } from '@/components/Layouts'

export function Footer() {
  return (
    <CenteredColumn>
      <div className="flex flex-row space-x-4 mx-auto justify-content gap-4 p-6 py-16 bg-gray-100 dark:bg-gray-1000 sm:bg-gray-50 sm:dark:bg-gray-1000">
        <Link href="/" as="/" passHref>
          <a className="black-link">Home</a>
        </Link>

        <Link href="/about" as="/about" passHref>
          <a className="black-link">About</a>
        </Link>

        <a
          href="https://github.com/omaralsoudanii"
          target="_blank"
          rel="noopener noreferrer"
          className="black-link"
        >
          Github
        </a>
      </div>
    </CenteredColumn>
  )
}
