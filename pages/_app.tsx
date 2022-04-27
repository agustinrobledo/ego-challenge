import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, snas-serif',
    body: 'Montserrat, sans-serif'
  }
})


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
      <motion.div 
          key={router.route}
          initial="pageInitial" animate="pageAnimate" transition={{duration: 0.8}} variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
      >
    <ChakraProvider  theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
      </motion.div>
  )
}

export default MyApp
