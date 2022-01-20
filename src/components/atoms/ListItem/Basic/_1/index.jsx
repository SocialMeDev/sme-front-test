import { HStack, useColorModeValue } from '@chakra-ui/react'

export default function ListItem({ children, ...rest }) {
  const bg = useColorModeValue('gray.50', 'gray.600')

  return (
    <HStack
      as="li"
      _odd={{ bg }}
      rounded="md"
      p="2"
      mb="2"
      w="100%"
      justify="space-between"
      {...rest}
    >
      {children}
    </HStack>
  )
}
