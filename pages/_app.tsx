import { AppProps } from 'next/app'

import 'styles/global.scss'

function CustomApp({ Component: App, pageProps }: AppProps) {
  return <App {...pageProps} />
}

export default CustomApp
