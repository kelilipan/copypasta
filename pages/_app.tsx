import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import theme from '@/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction='column' alignItems='center' minH='100vh'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
