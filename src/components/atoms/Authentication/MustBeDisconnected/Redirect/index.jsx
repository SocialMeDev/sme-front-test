import { useState, useEffect, memo } from 'react'

import { useAuth } from 'contexts/Auth/Provider'

import Loading from 'components/atoms/Loader/Basic/_1'

import Checking from './components/Checking'

function MustBeDisconnectedWithRedirect({ children, redirect }) {
	const [loading, setLoading] = useState(true)
	const [isPermited, setIsPermited] = useState(false)

	const { userPosition } = useAuth()

	useEffect(() => {
		async function loadAsync() {
			setLoading(true)

			const isDisconnected = userPosition === false

			if (isDisconnected) {
				setIsPermited(true)
			} else {
				setIsPermited(false)
			}

			setLoading(false)
		}

		loadAsync()
	}, [])

	return loading ? (
		<Loading height="100vh" text="Verificando autenticação" />
	) : (
		<Checking isPermited={isPermited} redirect={redirect}>
			{children}
		</Checking>
	)
}

export default memo(MustBeDisconnectedWithRedirect)
