import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { dataCards } from '../../pages/Home/data.cards'
import HomePageCard from '../HomePageCard/HomePageCard'
import './Projects.scss'

const Projects = () => {
	return (
		<div className="projects">
			<h2 className='site-title'>Projects</h2>
			<div style={{ marginTop: '10px' }}>
				<ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 750: 2 }}>
					<Masonry gutter="10px">
						{dataCards.map((item) => (
							<HomePageCard item={item} />
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</div>
	)
}

export default Projects
