import { CardProps } from '@/types'
import { useClipboard } from '@chakra-ui/hooks'
import { Box } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import React from 'react'

const Card: React.FC<CardProps> = ({ text, ...props }) => {
  const { hasCopied, onCopy } = useClipboard(text)
  return (
    <Tooltip
      label={hasCopied ? 'Copied' : 'Click to copy!'}
      aria-label='A tooltip'
    >
      <Box borderRadius='4px' shadow='md' p='4' {...props} onClick={onCopy}>
        {text}
      </Box>
    </Tooltip>
  )
}

export default Card