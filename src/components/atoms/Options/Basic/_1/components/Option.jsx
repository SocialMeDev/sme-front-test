import { memo } from 'react'

import { ListItem, useColorModeValue } from '@chakra-ui/react'

function Option({ children, value, onChange, onClose }) {
	const buttonTextColor = useColorModeValue('blackAlpha.800', 'white')
	const hoverButtonColor = useColorModeValue('primary.300', 'primary.600')

	function handleClick(currentValue) {
		onChange(currentValue)
		onClose()
	}

	return (
		<ListItem
			lineHeight="8"
			h="8"
			ps="4"
			transition="all 0.4s"
			_hover={{ color: 'white', bg: hoverButtonColor }}
			_first={{ roundedTopLeft: 'sm', roundedTopRight: 'sm' }}
			_last={{ roundedBottomLeft: 'sm', roundedBottomRight: 'sm' }}
			color={buttonTextColor}
			onClick={() => handleClick(value)}
		>
			{children}
		</ListItem>
	)
}

export default memo(Option)
