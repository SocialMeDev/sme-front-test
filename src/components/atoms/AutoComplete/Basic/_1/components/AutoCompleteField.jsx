import { memo, forwardRef } from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import { Arrow5 } from 'components/atoms/Icons/Interface'

import useDebounce from 'hooks/useDebounce'

const AutoCompleteField = forwardRef(
	({ onChange, name, onBlur, onOpen, ...rest }, ref) => {
		const handleOnChangeDebounce = useDebounce((event) => {
			onChange(event)
		})

		return (
			<InputGroup {...rest}>
				<Input
					onBlur={onBlur}
					name={name}
					ref={ref}
					onChange={handleOnChangeDebounce}
					onClick={onOpen}
					autoComplete="off"
					rounded="md"
				/>
				<InputRightElement pointerEvents="none">
					<Arrow5 />
				</InputRightElement>
			</InputGroup>
		)
	}
)

export default memo(AutoCompleteField)
