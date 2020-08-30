import Head from 'next/head'
import Link from 'next/link'
import { NextSeo as Seo } from 'next-seo'

import { Layout } from 'components'

export default function Home() {
  return (
    <Layout hideHeader>
      <Head>
        <title>Not Found | Leo Ji</title>
      </Head>
      <Seo
        title='404 Not Found | Leo Ji'
        description='Page not found.'
        openGraph={{
          type: 'website',
          url: 'https://leoji.codes',
          title: '404 Not Found | Leo Ji',
          description: 'Page not found.',
        }}
        noindex
      />
      <h2 className='display-3'>Not Found</h2>
      <p>The page you're looking for is not found.</p>
      <p>
        <Link href='/'>
          <a className='text-secondary'>Want to learn more about me?</a>
        </Link>
      </p>
    </Layout>
  )
}
