import { memo } from 'react'
import './styles/global.scss'
import './styles/global.scss'
import { AppRouter } from './providers/Router'

const App = memo(() => {
	return (
		<>
			<AppRouter />
		</>
	)
})

export default App
