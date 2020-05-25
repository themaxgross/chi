import Head from 'next/head'
import { NextSeo as Seo } from 'next-seo'

import { Layout } from 'components'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Leo Ji</title>
        <Seo
          title='Leo Ji, software developer and engineer'
          description='Software developer and engineer with a focus on human-centered design principles.'
        />
      </Head>
      <p>
        Hi. I’m Leo. I’m currently a software engineer at The Washington Post.
      </p>
      <p>
        Previously, I studied at Northwestern University, where I held multiple
        roles in student-run organizations.
      </p>
    </Layout>
  )
}
