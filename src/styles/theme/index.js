import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import styles from './styles'
import colors from './colors'
import components from './components'
import layerStyles from './layers'
import fonts from './fonts'

const customTheme = extendTheme(
	{
		styles,
		colors,
		fonts,
		components,
		layerStyles
	},
	withDefaultColorScheme({ colorScheme: 'primary' })
)

export default customTheme
