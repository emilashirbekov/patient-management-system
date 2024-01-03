import { Sidebar } from '@/widgets/Sidebar'
import { memo } from 'react'
import './styles/global.scss'
import { Navbar } from '@/widgets/Navbar'
import './styles/global.scss'

const App = memo(() => {
	return (
		<>
			<Sidebar />
			<div className='content'>
				<Navbar />
			</div>
		</>
	)
})

export default App
