import { Box, useDisclosure } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Option, OptionsGroup } from 'components/atoms/Options/Basic/_1'

import { AutoComplete, AutoCompleteField } from '.'

export default {
	component: AutoComplete,
	title: 'Atoms/AutoComplete/Basic/_1',
	argTypes: {
		setValue: {
			name: 'setValue',
			table: {
				type: {
					summary: '(key: string, value: any) => void'
				}
			}
		},
		register: {
			name: 'register',
			table: {
				type: {
					summary: 'register={register(key: string)}'
				}
			}
		},
		onChange: {
			name: 'onChange',
			table: {
				type: {
					summary: '(optionValue: any) => void'
				}
			}
		}
	}
}

export const Common = (args) => {
	const { isOpen, onClose, onOpen } = useDisclosure()

	const { register, setValue } = useForm({
		reValidateMode: 'onBlur'
	})

	return (
		<Box maxW="250px">
			<AutoComplete onOpen={onOpen} onClose={onClose}>
				<AutoCompleteField size="md" {...register('input')} />

				<OptionsGroup
					{...args}
					isOpen={isOpen}
					onChange={(value) => setValue('input', value)}
				>
					<Option value="Option Teste JS">Option Teste A</Option>
					<Option value="Option B">Option B</Option>
					<Option value="Option C">Option C</Option>
				</OptionsGroup>
			</AutoComplete>
		</Box>
	)
}
