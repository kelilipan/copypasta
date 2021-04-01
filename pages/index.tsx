import React, { useEffect, useState } from 'react'
import Main from '@/components/Main'
import { Code, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/layout'
import Head from 'next/head'
import Card from '@/components/Card'
import data from '@/data/copypasta'
import { useRouter } from 'next/dist/client/router'
import SearchBox from '@/components/SearchBox'

const SearchNotFound: React.FC<{ query: string }> = ({ query }) => {
  return (
    <Flex direction='column' pt='4' alignItems='center' w='full'>
      <Heading>Not Found 😭</Heading>
      <Text mt='2'>
        <Code>{query}</Code> is not found.
      </Text>
      <Text>Try using another keyword or tags.</Text>
    </Flex>
  )
}

const index: React.FC = () => {
  const router = useRouter()
  const { s } = router.query
  const [lists, setLists] = useState(data)
  const [keyword, setKeyword] = useState<string>('')
  const searchData = async (query: string) => {
    const Fuse = (await import('fuse.js')).default
    const options = {
      keys: ['text', 'tags'],
      threshold: 0.4
    }
    const fuse = new Fuse(data, options)
    const result = fuse.search(query)
    setLists(result.map((kampus) => kampus.item))
  }

  useEffect(() => {
    if (router.isReady && s) {
      setKeyword(s as string)
      searchData(s as string)
    }
  }, [s])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push({
      query: {
        s: keyword
      }
    })
  }
  const handleClear = () => {
    setKeyword('')
    setLists(data)
    router.push({
      pathname: '/'
    })
  }

  return (
    <>
      <Head>
        <title>Copypasta</title>
      </Head>
      <Main>
        <Text fontSize={['sm', 'md']} textAlign='justify'>
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
        <SearchBox
          keyword={keyword}
          handleChange={handleChange}
          handleSubmit={handleSearch}
          handleClear={handleClear}
        />
        {lists?.length ? (
          <SimpleGrid columns={[1, 1, 2, 3]} gap='4'>
            {lists.map(
              ({ text, description, tags, language, external }, idx) => {
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
              }
            )}
          </SimpleGrid>
        ) : (
          <SearchNotFound query={s as string} />
        )}
      </Main>
    </>
  )
}

export default index
