import { Fragment } from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import 'styles/global.scss'

function CustomApp({ Component: App, pageProps }: AppProps) {
  return (
    <Fragment>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_us',
          url: 'https://leoji.codes/',
          site_name: 'Leo Ji, software developer and engineer',
        }}
        twitter={{
          handle: '@theleoji',
          site: '@theleoji',
          cardType: 'summary_large_image',
        }}
      />
      <App {...pageProps} />
    </Fragment>
  )
}

export default CustomApp
