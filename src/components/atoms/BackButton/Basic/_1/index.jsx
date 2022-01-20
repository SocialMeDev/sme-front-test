import { memo } from 'react'
import { IconButton } from '@chakra-ui/react'

import { Arrow24 } from 'components/atoms/Icons/Interface'
import { LinkWrapper } from 'components/atoms/Link/Basic'

function BackButton({ href }) {
	return (
		<LinkWrapper href={href || '#'}>
			<IconButton
				variant="ghost"
				aria-label="Search database"
				icon={<Arrow24 />}
			/>
		</LinkWrapper>
	)
}

export default memo(BackButton)
