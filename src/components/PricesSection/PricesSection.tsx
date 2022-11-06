import React, { useState } from 'react'
import PriceCard from '../PriceCard/PriceCard'
import { dataPriceCard, dataPriceCardArchitect } from './data.price'
import './PricesSection.scss'

const PricesSection = () => {
	const [activeid, setActiveid] = useState<number>(0)
	return (
		<section className="prices-section">
			<h2 className="site-title">Prices</h2>
			<div className="prices-inner">
				<div className="prices-inner-block">
				<h3>Interior Design</h3>
				{dataPriceCard.map((item, index)=><PriceCard key={item.id} activeid={activeid} setActiveid={setActiveid} item={item} />)}
				</div>
				<div className="prices-inner-block">
				<h3>Architecture</h3>
				{dataPriceCardArchitect.map((item, index)=><PriceCard key={item.id} activeid={activeid} setActiveid={setActiveid} item={item} />)}
				</div>
			</div>
		</section>
	)
}

export default PricesSection
