import Head from 'next/head'
import { NextSeo as Seo } from 'next-seo'

import { Layout } from 'components'
import Alert from 'react-bootstrap/Alert'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>About | Leo Ji</title>
      </Head>
      <Seo
        title='About | Leo Ji'
        description='Software developer and engineer with a focus on human-centered design principles.'
        openGraph={{
          type: 'website',
          url: 'https://leoji.codes',
          title: 'About | Leo Ji',
          description:
            'Software developer and engineer with a focus on human-centered design principles.',
        }}
      />
      <h1>About</h1>
      <Alert variant='warning'>In progress...</Alert>
    </Layout>
  )
}
