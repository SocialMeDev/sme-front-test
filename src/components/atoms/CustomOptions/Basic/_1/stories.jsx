import { useForm } from 'react-hook-form'
import { Text, Box, Button, useDisclosure } from '@chakra-ui/react'

import { CustomOption, CustomOptionsGroup } from '.'

export default {
	component: CustomOptionsGroup,
	title: 'Atoms/CustomOptions/Basic/_1',
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
		onChange: {
			table: {
				type: {
					summary: '(event: optionValue) => void'
				}
			}
		}
	}
}

export const Basic = (args) => {
	const { isOpen, onClose, onOpen } = useDisclosure()

	const { setValue, watch } = useForm({
		reValidateMode: 'onBlur',
		defaultValues: { option: 'Value' }
	})

	return (
		<Box maxW="250px" {...args}>
			<Button onClick={onOpen} variant="solid">
				Value: {watch('option')}
			</Button>

			<CustomOptionsGroup
				isOpen={isOpen}
				onClose={onClose}
				onChange={(value) => setValue('option', value)}
			>
				<CustomOption value="Jorge Barros">
					<Text
						_hover={{ color: 'primary.500' }}
						cursor="pointer"
						transition="0.2s all"
					>
						Jorge Barros
					</Text>
				</CustomOption>
				<CustomOption value="Vanessa Naveca">
					<Text
						_hover={{ color: 'primary.500' }}
						cursor="pointer"
						transition="0.2s all"
					>
						Vanessa Naveca
					</Text>
				</CustomOption>
				<CustomOption value="Sabrina Gonsalves">
					<Text
						_hover={{ color: 'primary.500' }}
						cursor="pointer"
						transition="0.2s all"
					>
						Sabrina Gonsalves
					</Text>
				</CustomOption>
			</CustomOptionsGroup>
		</Box>
	)
}
