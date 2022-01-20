import { memo, useState } from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react'

import { Eye5, EyeHidden } from 'components/atoms/Icons/Interface'

function PasswordInput(props) {
  const primary = process.env.NEXT_PUBLIC_COLOR_SCHEME

  const color = useColorModeValue(`${primary}.400`, `${primary}.800`)

  const [show, setShow] = useState(false)

  return (
    <InputGroup {...props}>
      <Input
        autoComplete="off"
        rounded="md"
        type={`${show ? 'text' : 'password'}`}
        {...props.register}
      />

      <InputRightElement
        cursor="pointer"
        _hover={{ svg: { transition: 'all 0.4s', color } }}
      >
        {show ? (
          <EyeHidden size={20} onClick={() => setShow(false)} />
        ) : (
          <Eye5 size={20} onClick={() => setShow(true)} />
        )}
      </InputRightElement>
    </InputGroup>
  )
}

export default memo(PasswordInput)
