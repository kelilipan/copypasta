import { FlexProps } from '@chakra-ui/layout'

export interface ExternalURL {
  text: string
  url: string
}

export interface Copypasta {
  text: string
  language: string | string[]
  tags?: string[]
  description?: string
  external?: ExternalURL[]
}

export interface CardProps extends FlexProps, Copypasta {}
