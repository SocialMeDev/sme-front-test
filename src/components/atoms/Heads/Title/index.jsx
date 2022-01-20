import { memo } from 'react'
import Head from 'next/head'

function PageHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default memo(PageHead)
