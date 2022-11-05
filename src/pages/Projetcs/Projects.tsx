import { gsap } from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { dataCards } from '../Home/data.cards'
import HomePageCard from '../../components/HomePageCard/HomePageCard'
import './Projects.scss'

const Projects = () => {
	const ref = useRef(null)
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.projects .site-title', { opacity: 0, duration: 0.5, y: '50px', delay: 0.3, ease: 'elastic' })
			gsap.from('.gallery', { opacity: 0, duration: 1, y: '300px', delay: 0.8, ease: 'power.2in' })
		}, ref)
		return () => ctx.revert()
	}, [])
	return (
		<div className="projects" ref={ref}>
			<h2 className="site-title">Projects</h2>
			<div className="gallery" style={{ marginTop: '10px' }}>
				<ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 750: 2 }}>
					<Masonry gutter="10px">
						{dataCards.map((item) => (
							<HomePageCard key={item.id} item={item} />
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</div>
	)
}

export default Projects
