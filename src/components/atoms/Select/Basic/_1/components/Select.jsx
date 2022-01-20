import { Children, cloneElement, memo, useRef } from 'react'
import { Flex, useOutsideClick } from '@chakra-ui/react'

function Select({ children, onOpen, onClose }) {
  const ref = useRef(null)

  useOutsideClick({
    ref: ref,
    handler: onClose,
  })

  const Items = Children.map(children, (child) => {
    return cloneElement(child, {
      onOpen,
      onClose,
    })
  })

  return (
    <Flex ref={ref} direction="column">
      {Items}
    </Flex>
  )
}

export default memo(Select)
