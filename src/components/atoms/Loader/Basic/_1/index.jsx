import { memo } from 'react'
import { Flex, Text, Spinner, useColorModeValue } from '@chakra-ui/react'

function BasicLoader({ text, height, isLoading = true, children }) {
	const color = useColorModeValue('primary.700', 'primary.200')

	if (isLoading) {
		return (
			<Flex w="full" minH={height || '100px'} justify="center" align="center">
				<Flex direction="column" justify="center" align="center">
					<Spinner color={color} size="lg" />
					<Text mt={5} color={color}>
						{text}
					</Text>
				</Flex>
			</Flex>
		)
	}

	return children
}

export default memo(BasicLoader)
