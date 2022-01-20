import { memo } from 'react'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'

function FormItem(props) {
  const { error, label, children, textAlign, ...rest } = props

  return (
    <FormControl mb="4" isInvalid={!!error} {...rest}>
      <FormLabel fontSize="sm" textAlign={textAlign}>
        {label}
      </FormLabel>
      {children}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}

export default memo(FormItem)
