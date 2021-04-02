import Document, { DocumentContext } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=New+Tegomin&text="Copypasta"'
            rel='stylesheet'
          />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
          <meta name='theme-color' content='#ffffff' />
          <meta name='application-name' content='Copypasta' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content='Copypasta' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='description' content='Copypasta archive app' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://copypasta.wisesa.dev' />
          <meta name='twitter:title' content='Copypasta' />
          <meta name='twitter:description' content='Copypasta archive app' />
          <meta
            name='twitter:image'
            content='https://copypasta.wisesa.dev/android-icon-192x192.png'
          />
          <meta name='twitter:creator' content='@svspicious' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Copypasta' />
          <meta property='og:description' content='Copypasta archive app' />
          <meta property='og:site_name' content='Copypasta' />
          <meta property='og:url' content='https://copypasta.wisesa.dev' />
          <meta
            property='og:image'
            content='https://copypasta.wisesa.dev/apple-icon.png'
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode='light' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
