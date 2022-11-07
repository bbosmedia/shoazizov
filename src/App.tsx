import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import AnimatedCursor from 'react-animated-cursor'
import Footer from './components/Footer/Footer'
import Projects from './pages/Projetcs/Projects'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import BeforeAfter from './pages/BeforeAfter/BeforeAfter'
import Galleries from './pages/Galleries/Galleries'

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
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/before-after" element={<BeforeAfter />} />
				<Route path="/galleries/:id" element={<Galleries />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
