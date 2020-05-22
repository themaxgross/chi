import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Head>
        <link rel='stylesheet' href='https://use.typekit.net/vsr0fdb.css' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='pt-5'>
        <Header />
        {children}
        <Footer />
      </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: adobe-garamond-pro, serif;
          font-weight: 400;
          font-style: normal;
        }
        * {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: futura-pt, sans-serif;
          font-weight: normal;
        }
        p {
          font-family: adobe-garamond-pro, serif;
          font-weight: 400;
          font-style: normal;
          font-size: 1.25rem;
        }
      `}</style>
    </Container>
  )
}
