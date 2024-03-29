import { Text, Link, Box } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Box p='2'>
      <Text color='gray.500' fontSize={12}>
        2021 ©
        <Link href='https://github.com/kelilipan' color='gray.500' isExternal>
          kelilipan
        </Link>
        . All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer
