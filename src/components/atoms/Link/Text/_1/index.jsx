import { memo } from 'react'
import { Text } from '@chakra-ui/react'

import NextLink from 'next/link'

function Link({ href, target, children }) {
  return (
    <NextLink href={href} passHref>
      <Text
        target={target || '_self'}
        color="primary.400"
        cursor="pointer"
        transition="0.4s all"
        textDecorationLine="underline"
        _hover={{ color: 'primary.600' }}
        as="a"
      >
        {children}
      </Text>
    </NextLink>
  )
}

export default memo(Link)
