import Head from 'next/head'
import * as React from 'react'

export default function Page({ children }) {
  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <div className="px-2 pt-24 pb-16 sm:px-0">{children}</div>
    </React.Fragment>
  )
}
