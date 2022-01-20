import { IconButton } from '@chakra-ui/react'
import { useSidebar } from 'contexts/Sidebar/Provider'
import { MenuArrowSquare } from 'components/atoms/Icons/Interface'

export default function SidebarDrawerButton() {
	const { isOpen, onOpen, onClose } = useSidebar()

	return (
		<IconButton
			aria-label="Menu"
			variant="ghost"
			onClick={isOpen ? onClose : onOpen}
			icon={
				<MenuArrowSquare
					transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
					transition="0.5s all"
				/>
			}
			size="sm"
		/>
	)
}
