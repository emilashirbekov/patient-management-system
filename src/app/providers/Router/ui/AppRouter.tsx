import { Login } from '@/pages/Login'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
	return (
		<Routes>
			{/* <Navbar />
			<Sidebar /> */}
			<Route path='/login' element={<Login />} />
		</Routes>
	)
}
