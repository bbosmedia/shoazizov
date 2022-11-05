import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { dataCards } from './data.cards'
import HomePageCard from '../../components/HomePageCard/HomePageCard'
import './Home.scss'

const Home = () => {
	return (
		<div className="homepage">
			<div className="hero" style={{ backgroundImage: 'url("https://hot-walls.ru/wp-content/uploads/2021/12/1_Livingroom-5_result.jpg")' }}></div>
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

export default Home
