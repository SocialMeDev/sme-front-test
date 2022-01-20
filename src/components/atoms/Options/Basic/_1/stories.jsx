import { Box, Button, useDisclosure } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Option, OptionsGroup } from '.'

const props = {
	options: [
		{
			value: 'Option A',
			label: 'Option A'
		},
		{
			value: 'Option B',
			label: 'Option B'
		},
		{
			value: 'Option C',
			label: 'Option C'
		},
		{
			value: 'Option D',
			label: 'Option D'
		},
		{
			value: 'Option E',
			label: 'Option E'
		},
		{
			value: 'Option F',
			label: 'Option F'
		},
		{
			value: 'Option G',
			label: 'Option G'
		},
		{
			value: 'Option H',
			label: 'Option H'
		},
		{
			value: 'Option I',
			label: 'Option I'
		}
	]
}

export default {
	component: OptionsGroup,
	title: 'Atoms/Options/Basic/_1',
	args: {},
	argTypes: {
		isOpen: {
			name: 'isOpen',
			defaultValue: false,
			control: {
				type: 'boolean'
			},
			table: {
				type: {
					summary: 'boolean'
				}
			}
		},

		onOpen: {
			table: {
				type: {
					summary: '( ) => void'
				}
			}
		},
		onClose: {
			table: {
				type: {
					summary: '( ) => void'
				}
			}
		},
		onChange: {
			table: {
				type: {
					summary: '(value) => void'
				}
			}
		}
	}
}

export const Common = (args) => {
	const { isOpen, onClose, onOpen } = useDisclosure()

	const { setValue, watch } = useForm({
		reValidateMode: 'onBlur',
		defaultValues: { option: 'Value' }
	})

	return (
		<Box maxW="250px">
			<Button onClick={onOpen} variant="solid">
				Value: {watch('option')}
			</Button>

			<OptionsGroup
				isOpen={isOpen || args.isOpen}
				onClose={onClose}
				onChange={(option) => setValue('option', option.value)}
			>
				{props.options.map((option) => (
					<Option key={option.label} value={option}>
						{option.label}
					</Option>
				))}
			</OptionsGroup>
		</Box>
	)
}
