import { Stack, StackProps } from '@chakra-ui/layout'
import React from 'react'

const Main: React.FC<StackProps> = ({ children, ...props }) => {
  return (
    <Stack
      flex='1'
      w='full'
      maxW={[null, null, '2xl', '6xl']}
      px={{ base: 4, md: 2 }}
      {...props}
    >
      {children}
    </Stack>
  )
}

export default Main
