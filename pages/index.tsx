import Head from 'next/head'
import { NextSeo as Seo } from 'next-seo'

import { Layout } from 'components'
import Writings from 'data/writings'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Leo Ji</title>
      </Head>
      <Seo
        title='Leo Ji, software developer and engineer'
        description='Software developer and engineer with a focus on human-centered design principles.'
        openGraph={{
          type: 'website',
          url: 'https://leoji.codes',
          title: 'Leo Ji, software developer and engineer',
          description:
            'Software developer and engineer with a focus on human-centered design principles.',
        }}
      />
      <section className='mb-4'>
        <p>
          Hi. I’m Leo. I’m currently a software engineer at The Washington Post
          based in Washington, D.C., and a writer on life, identity and Asian
          America.
        </p>
        <p>I studied at Northwestern University in Evanston, Illinois.</p>
      </section>
      <section>
        <h2>Selected Writings</h2>
        <Writings />
      </section>
    </Layout>
  )
}
