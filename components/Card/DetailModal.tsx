import { Copypasta } from '@/types'
import { Button } from '@chakra-ui/button'
import { useClipboard } from '@chakra-ui/hooks'
import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay
} from '@chakra-ui/modal'
import { Tooltip } from '@chakra-ui/tooltip'
import React, { useRef } from 'react'
import { FaCopy, FaTimes } from 'react-icons/fa'
import languageData from '@/data/languages'
interface Props extends Copypasta {
  isOpen?: boolean
  onClose?: () => void
}

const DetailModal: React.FC<Props> = ({
  isOpen,
  onClose,
  text,
  description,
  external,
  language,
  tags
}) => {
  const closeRef = useRef()
  const { hasCopied, onCopy } = useClipboard(text)
  const translateLang = (langCode: string) => {
    return languageData.find(({ code }) => code === langCode)
  }
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior='inside'
      size='4xl'
      initialFocusRef={closeRef}
    >
      <ModalOverlay />
      <ModalContent minH='50vh' borderRadius={[0, 2]}>
        <ModalBody p='4' d='flex' flexDirection='column'>
          <Text whiteSpace='pre-wrap' flex='1'>
            {text}
          </Text>
          <Divider my='4' />
          <Heading as='h5' size='md'>
            Description
          </Heading>
          <Text>{description ? description : 'No description'}</Text>
          <Stack mt='4' direction={['column', 'row']}>
            <Box w={['full', '50%']}>
              <Heading as='h5' size='md'>
                Language
              </Heading>
              {Array.isArray(language) ? (
                <UnorderedList p='2'>
                  {language.map((lang, idx) => {
                    return (
                      <ListItem key={idx}>
                        <Tooltip
                          label={translateLang(lang)?.native}
                          aria-label='A tooltip'
                        >
                          {`${translateLang(lang).name} (${lang})`}
                        </Tooltip>
                      </ListItem>
                    )
                  })}
                </UnorderedList>
              ) : (
                <Tooltip
                  label={translateLang(language).native}
                  aria-label='A tooltip'
                >
                  {`${translateLang(language).name} (${language})`}
                </Tooltip>
              )}
            </Box>
            <Box w={['full', '50%']}>
              <Heading as='h5' size='md'>
                External links
              </Heading>
              {external?.length ? (
                <UnorderedList p='2'>
                  {external.map(({ url, text }, idx) => {
                    return (
                      <ListItem key={idx}>
                        <Link
                          href={url}
                          isExternal
                          aria-label={text}
                          color='blue.500'
                        >
                          {text}
                        </Link>
                      </ListItem>
                    )
                  })}
                </UnorderedList>
              ) : (
                <Text>No external links/references</Text>
              )}
            </Box>
          </Stack>
          <Text mt='4'>
            {tags?.map((tag, idx) => {
              return (
                <Text color='blue.600' as='span' key={idx}>{`#${tag} `}</Text>
              )
            })}
          </Text>
        </ModalBody>
        <ModalFooter borderTop='solid 1px #eee'>
          <Button
            onClick={onCopy}
            leftIcon={<FaCopy />}
            colorScheme='blue'
            mr='2'
          >
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
          <Button
            ref={closeRef}
            onClick={onClose}
            leftIcon={<FaTimes />}
            colorScheme='red'
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DetailModal
