import { AppProps } from 'next/app'

import 'styles/global.scss'

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CustomApp
