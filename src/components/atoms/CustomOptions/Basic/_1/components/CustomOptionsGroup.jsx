import { Children, cloneElement, memo } from 'react'
import { Box, List, useColorModeValue } from '@chakra-ui/react'

function OptionsGroup({ isOpen, children, onClose, onChange }) {
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  const bg = useColorModeValue('white', 'gray.600')

  const Items = Children.map(children, (child) => {
    return cloneElement(child, {
      onClose,
      onChange,
    })
  })

  return (
    <Box position="relative">
      <List
        mt="2"
        bg={bg}
        rounded="md"
        minW="100%"
        maxH="200px"
        zIndex="100"
        position="absolute"
        overflowY="auto"
        border="1px solid"
        layerStyle="scrollBarVertical"
        borderColor={borderColor}
        cursor="pointer"
        transition="opacity 0.4s"
        pointerEvents={`${isOpen ? 'auto' : 'none'}`}
        opacity={`${isOpen ? '1' : '0'}`}
      >
        {Items}
      </List>
    </Box>
  )
}

export default memo(OptionsGroup)
