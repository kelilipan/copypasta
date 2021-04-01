import { Button, IconButton } from '@chakra-ui/button'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Flex, FlexProps } from '@chakra-ui/layout'
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
  return (
    <Flex {...props}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', width: '100%', margin: '0.75rem 0' }}
      >
        <InputGroup>
          <Input
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
        <Button leftIcon={<FaSearch />} type='submit'>
          Search
        </Button>
      </form>
    </Flex>
  )
}

export default SearchBox
