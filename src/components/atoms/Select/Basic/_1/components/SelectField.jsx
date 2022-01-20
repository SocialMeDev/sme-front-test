import { memo } from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import { Arrow5 } from 'components/atoms/Icons/Interface'

function SelectField(props) {
  const { value, register, onOpen } = props

  const inputProps = Object.assign({}, props)

  delete inputProps.onOpen
  delete inputProps.register

  return (
    <InputGroup {...inputProps}>
      <Input
        {...register}
        readOnly
        autoComplete="off"
        rounded="md"
        value={value}
        cursor="pointer"
        onClick={() => {
          if (onOpen) onOpen()
        }}
      />
      <InputRightElement pointerEvents="none">
        <Arrow5 />
      </InputRightElement>
    </InputGroup>
  )
}

export default memo(SelectField)
