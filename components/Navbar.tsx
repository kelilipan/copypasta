import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/react'
import { FaCopy } from 'react-icons/fa'
import InstallPWA from './InstallPWA'

const Navbar: React.FC = () => {
  return (
    <Flex
      w='full'
      justifyContent='space-between'
      maxW={[null, null, '2xl', '6xl']}
      pos='relative'
      py='4'
    >
      <Box textAlign='center' w='full'>
        <Heading fontSize='2xl' fontFamily='logo'>
          Copypasta
          <Icon as={FaCopy} boxSize='22px' />
        </Heading>
      </Box>
      <Box pos='absolute' top='5' right='2'>
        <InstallPWA />
      </Box>
    </Flex>
  )
}

export default Navbar
