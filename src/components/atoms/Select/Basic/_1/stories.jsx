import { useForm } from 'react-hook-form'
import { Box, FormLabel, useDisclosure } from '@chakra-ui/react'

import { Option, OptionsGroup } from 'components/atoms/Options/Basic/_1'

import { Select, SelectField } from '.'

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
	component: Select,
	title: 'Atoms/Select/Basic/_1',
	args: props,
	argTypes: {
		onChange: {
			table: {
				type: {
					summary: '(optionValue) => void'
				}
			}
		}
	}
}

export const Common = (args) => {
	const { isOpen, onClose, onOpen } = useDisclosure()

	const { setValue, watch } = useForm({
		reValidateMode: 'onBlur',
		defaultValues: { input: 'Option A' }
	})

	return (
		<Box maxW="300px">
			<FormLabel fontSize="md">Select</FormLabel>

			<Select {...args} onOpen={onOpen} onClose={onClose}>
				<SelectField size="md" value={watch('input')} />

				<OptionsGroup
					isOpen={isOpen}
					onChange={(value) => setValue('input', value)}
				>
					{props.options.map(({ value, label }) => (
						<Option key={value} value={value}>
							{label}
						</Option>
					))}
				</OptionsGroup>
			</Select>
		</Box>
	)
}
