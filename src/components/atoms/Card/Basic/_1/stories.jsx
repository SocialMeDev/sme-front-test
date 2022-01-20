import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'

import Card from '.'

export default {
	component: Card,
	title: 'Atoms/Card/Basic/_1'
}

export const Common = (args) => (
	<Card {...args}>
		<HStack>
			<Avatar src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg" />

			<VStack>
				<Text>Primeiro nome</Text>
				<Text>Ultimo nome</Text>
			</VStack>
		</HStack>
	</Card>
)
