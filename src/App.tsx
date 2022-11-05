import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import AnimatedCursor from 'react-animated-cursor'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<>
			<AnimatedCursor
				innerSize={6}
				outerSize={50}
				color="255, 255, 255"
				outerAlpha={0.4}
				innerScale={1.4}
				outerScale={1.5}
				trailingSpeed={2}
				outerStyle={{
					border: '1px solid #fff',
					background: 'transparent',
				}}
			/>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
