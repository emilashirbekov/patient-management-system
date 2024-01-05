import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { MenuContextProvider } from './app/providers/MenuProvider/ui/MenuContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
	<MenuContextProvider>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</MenuContextProvider>
)
