import { extendTheme } from '@chakra-ui/react'
const typography = {
  fonts: {
    logo: `'New Tegomin',-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
  }
}
const theme = extendTheme({
  ...typography
})

export default theme
