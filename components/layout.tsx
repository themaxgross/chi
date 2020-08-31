import Head from "next/head";
import Container, {ContainerProps} from "react-bootstrap/Container";
import {Header} from "./header";
import {Footer} from "./footer";
import {Fader} from "./fader";
import {backgroundColor} from "styles/constants";

export const Layout = ({
  hideHeader = false,
  children,
  ...rest
}: ContainerProps & {hideHeader?: boolean}) => {
  return (
    <Container {...rest} style={{maxWidth: "864px"}}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/vsr0fdb.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fader />
      <div className="pt-5">
        {!hideHeader && <Header />}
        <main>{children}</main>
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
          background-color: ${backgroundColor};
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
          font-family: noto-serif, serif;
          font-weight: 400;
          font-style: normal;
          font-size: 1.25rem;
        }
      `}</style>
    </Container>
  );
};
