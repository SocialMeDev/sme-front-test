import { useState, useEffect, memo } from 'react'
import { useAuth } from 'contexts/Auth/Provider'

import Loading from 'components/atoms/Loader/Basic/_1'
import Checking from './components/Checking'

function ShouldHaveUser({ children, redirect }) {
	const [loading, setLoading] = useState(true)
	const [isPermited, setIsPermited] = useState(false)

	const { user, userPosition } = useAuth()

	useEffect(() => {
		async function loadAsync() {
			setLoading(true)

			const userExist = Object.entries(user).length > 0

			if (userExist) {
				setIsPermited(true)
			} else {
				setIsPermited(false)
			}

			setLoading(false)
		}

		loadAsync()
	}, [userPosition])

	return loading ? (
		<Loading height="100vh" text="Verificando usuário" />
	) : (
		<Checking isPermited={isPermited} redirect={redirect}>
			{children}
		</Checking>
	)
}

export default memo(ShouldHaveUser)
