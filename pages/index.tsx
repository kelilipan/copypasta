import React from 'react'
import Main from '@/components/Main'
import { Link, SimpleGrid, Text } from '@chakra-ui/layout'
import Head from 'next/head'
import Card from '@/components/Card'
import data from '@/data/copypasta'
const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Copypasta</title>
      </Head>
      <Main>
        <Text>
          A copypasta is a block of text which is copied and pasted across the
          Internet by individuals through online forums and social networking
          websites. Copypastas are said to be similar to spam.{' '}
          <Link
            isExternal
            color='blue.500'
            href='https://en.wikipedia.org/wiki/Copypasta#:~:text=A%20copypasta%20is%20a%20block,to%20be%20similar%20to%20spam.'
          >
            (src:Wikipedia)
          </Link>
        </Text>
        <SimpleGrid columns={[1, 1, 2, 3]} gap='4'>
          {data.map(({ text, description, tags, language, external }, idx) => {
            return (
              <Card
                tags={tags}
                language={language}
                text={text}
                description={description}
                external={external}
                key={idx}
              />
            )
          })}
        </SimpleGrid>
      </Main>
    </>
  )
}

export default index
