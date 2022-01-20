import { Flex, useOutsideClick } from '@chakra-ui/react'
import { Children, cloneElement, memo, useRef } from 'react'

function AutoComplete({ children, onOpen, onClose }) {
	const ref = useRef(null)

	useOutsideClick({
		ref,
		handler: onClose
	})

	const Items = Children.map(children, (child) => {
		return cloneElement(child, {
			onOpen,
			onClose
		})
	})

	return (
		<Flex ref={ref} direction="column">
			{Items}
		</Flex>
	)
}

export default memo(AutoComplete)
