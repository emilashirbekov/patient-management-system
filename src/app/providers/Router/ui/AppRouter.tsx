import { Login } from '@/pages/Login'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
		</Routes>
	)
}
