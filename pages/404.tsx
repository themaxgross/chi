import Head from 'next/head'
import { NextSeo as Seo } from 'next-seo'

import { Layout } from 'components'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Not Found | Leo Ji</title>
      </Head>
      <Seo
        title='Not Found | Leo Ji'
        description='Page not found.'
        openGraph={{
          type: 'website',
          url: 'https://leoji.codes',
          title: 'Not Found | Leo Ji',
          description: 'Page not found.',
        }}
        noindex
      />
      <h2>Not Found</h2>
      <p>The page you're looking for is not found.</p>
    </Layout>
  )
}
