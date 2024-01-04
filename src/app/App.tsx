import { memo } from 'react'
import './styles/global.scss'
import './styles/global.scss'
import { AppRouter } from './providers/Router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Home } from '@/pages/Home'

const App = memo(() => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Home />
			<AppRouter />
		</>
	)
})

export default App
