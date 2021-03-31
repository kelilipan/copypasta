import { CardProps } from '@/types'
import { IconButton } from '@chakra-ui/button'
import { useClipboard, useDisclosure } from '@chakra-ui/hooks'
import { Flex, Text } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import { Tooltip } from '@chakra-ui/tooltip'
import React from 'react'
import { FaCopy } from 'react-icons/fa'
import DetailModal from './DetailModal'

const Card: React.FC<CardProps> = ({
  text,
  tags,
  external,
  description,
  language,
  ...props
}) => {
  const { hasCopied, onCopy } = useClipboard(text)
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex
        direction='column'
        whiteSpace='pre-wrap'
        borderRadius='4px'
        shadow='md'
        {...props}
      >
        <Text flex='1' p='4' noOfLines={6} cursor='pointer' onClick={onOpen}>
          {text}
        </Text>
        <Flex
          px='2'
          py='4'
          borderTop='1px solid #eee'
          justifyContent='space-between'
        >
          <Text noOfLines={2} isTruncated>
            {tags?.map((tag, idx) => {
              return (
                <Text color='blue.600' as='span' key={idx}>{`#${tag} `}</Text>
              )
            })}
          </Text>
          <Tooltip
            label={hasCopied ? 'Copied' : 'Click to copy!'}
            aria-label='A tooltip'
          >
            <IconButton
              colorScheme='blue'
              size='sm'
              aria-label='Click to copy'
              icon={<FaCopy />}
              onClick={() => {
                onCopy()
                toast({
                  title: 'Copied',
                  status: 'success',
                  duration: 3000,
                  isClosable: true
                })
              }}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <DetailModal
        tags={tags}
        language={language}
        text={text}
        description={description}
        external={external}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default Card
