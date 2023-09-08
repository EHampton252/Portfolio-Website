import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider>
			<Portfolio />
		</ChakraProvider>
	</React.StrictMode>,
)

