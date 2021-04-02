import { Button, IconButton } from '@chakra-ui/button'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Box, Flex, FlexProps } from '@chakra-ui/layout'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { RiDeleteBack2Fill } from 'react-icons/ri'
interface Props extends FlexProps {
  keyword: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleClear: () => void
}
const SearchBox: React.FC<Props> = ({
  handleChange,
  handleSubmit,
  handleClear,
  keyword,
  ...props
}) => {
  const maxW = [null, null, '2xl', '6xl']
  return (
    <Flex
      pos='sticky'
      top='0'
      zIndex='10'
      w='100%'
      justifyContent='center'
      style={{ backdropFilter: 'saturate(180%) blur(10px)' }}
      {...props}
    >
      <Box w='full' maxW={maxW}>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', width: '100%', margin: '0.75rem 0' }}
        >
          <InputGroup>
            <Input
              variant='filled'
              bgColor='blackAlpha.50'
              mr='2'
              placeholder='Search copypasta'
              onChange={handleChange}
              value={keyword}
            />
            <InputRightElement right='10px'>
              <IconButton
                onClick={handleClear}
                size='sm'
                fontSize='lg'
                variant='ghost'
                aria-label='clear search'
                icon={<RiDeleteBack2Fill />}
              />
            </InputRightElement>
          </InputGroup>
          <Button
            colorScheme='whiteAlpha'
            backgroundColor='blackAlpha.50'
            color='black'
            leftIcon={<FaSearch />}
            type='submit'
          >
            Search
          </Button>
        </form>
      </Box>
    </Flex>
  )
}

export default SearchBox
