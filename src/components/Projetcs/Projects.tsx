import { gsap } from 'gsap'
import React, { useLayoutEffect } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { dataCards } from '../../pages/Home/data.cards'
import HomePageCard from '../HomePageCard/HomePageCard'
import './Projects.scss'

const Projects = () => {
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.site-title', { opacity: 0, duration: 1, scale: 0.8, x: '-100px', delay: 0.3, ease: 'power2.in' })
			gsap.from('.gallery .home-page-card', { opacity: 0, y: '50px', delay: 1.2, stagger: 0.2 })
		})
		return () => ctx.revert()
	}, [])
	return (
		<div className="projects">
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
