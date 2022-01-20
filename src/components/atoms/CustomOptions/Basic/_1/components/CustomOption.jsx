import { memo } from 'react'
import { ListItem } from '@chakra-ui/react'

function CustomOption({ children, value, onChange, onClose }) {
	function handleClick(currentValue) {
		onChange(currentValue)
		onClose()
	}

	return (
		<ListItem p="2" onClick={() => handleClick(value)}>
			{children}
		</ListItem>
	)
}

export default memo(CustomOption)
