import React from 'react'
import { Box, Heading } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/react'
import { FaCopy } from 'react-icons/fa'

const Navbar: React.FC = () => {
  return (
    <Box p='4'>
      <Heading textAlign='center' fontSize='2xl' fontFamily='logo'>
        Copypasta
        <Icon as={FaCopy} boxSize='22px' />
      </Heading>
    </Box>
  )
}

export default Navbar
