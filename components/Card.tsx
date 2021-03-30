import { CardProps } from '@/types'
import { useClipboard } from '@chakra-ui/hooks'
import { Box, Text } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import React from 'react'

const Card: React.FC<CardProps> = ({ text, ...props }) => {
  const { hasCopied, onCopy } = useClipboard(text)
  return (
    <Tooltip
      label={hasCopied ? 'Copied' : 'Click to copy!'}
      aria-label='A tooltip'
    >
      <Box
        whiteSpace='pre-wrap'
        borderRadius='4px'
        shadow='md'
        p='4'
        {...props}
        onClick={onCopy}
      >
        <Text noOfLines={null}>{text}</Text>
      </Box>
    </Tooltip>
  )
}

export default Card
