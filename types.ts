import { BoxProps } from '@chakra-ui/layout'

export interface ExternalURL {
  text: string
  url: string
}

export interface Copypasta {
  text: string
  description?: string
  external?: ExternalURL[]
}

export interface CardProps extends BoxProps, Copypasta {}
