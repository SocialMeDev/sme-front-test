import { memo, useState } from 'react'

import { useRouter } from 'next/router'

import {
	Box,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent
} from '@chakra-ui/react'

import Loading from 'components/atoms/Loader/Basic#1'

import Card from './components/Card'

import PersonHeader from './components/Header'

import UserList from './components/UserList'

import Link from './components/Link'

import { useAuth } from 'contexts/Auth/Provider'

function AuthenticatedUsersModal() {
	const [isLoading, setIsLoading] = useState(false)

	const { isOpen, onOpen, onClose } = useDisclosure()

	const { user } = useAuth()

	const { query } = useRouter()

	const { institutionSlug } = query

	return (
		<>
			<Button onClick={onOpen}>{user.name}</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<Card>
						{isLoading ? (
							<Loading height="350px" text="Carregando novo usuário" />
						) : (
							<Box>
								<PersonHeader onClose={onClose} />

								<UserList setIsLoading={setIsLoading} onClose={onClose} />

								<Link
									text="Gerencimento de contas"
									href={{
										pathname: '/[institutionSlug]/auth/account',

										query: { institutionSlug }
									}}
								/>
							</Box>
						)}
					</Card>
				</ModalContent>
			</Modal>
		</>
	)
}

export default memo(AuthenticatedUsersModal)
