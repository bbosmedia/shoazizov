import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { dataCards } from './data.cards'
import HomePageCard from '../../components/HomePageCard/HomePageCard'
import './Home.scss'
import About from '../About/About'
import PricesSection from '../../components/PricesSection/PricesSection'
import HeroSlider from '../../components/HeroSlider/HeroSlider'

const Home = () => {
	return (
		<div className="homepage">
			<HeroSlider />
			<section style={{ marginTop: '10px' }}>
				<ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 750: 2 }}>
					<Masonry gutter="10px">
						{dataCards.map((item) => (
							<HomePageCard key={item.id} item={item} />
						))}
					</Masonry>
				</ResponsiveMasonry>
			</section>
			<PricesSection />
			{/* <About /> */}
		</div>
	)
}

export default Home
