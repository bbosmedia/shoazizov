import React from 'react'
import { Link } from 'react-router-dom'
import { IHomeCard } from '../../types'
import './HomePageCard.scss'

const HomePageCard = ({ item }: { item: IHomeCard }) => {
	return (
		<div className="home-page-card">
			<Link to={`/galleries/${item.id}`}>
				<img src={item.mainImage} alt={item.title} />
			</Link>
			<Link className="home-page-card-overlay" to={`/galleries/${item.id}`}>
				<span>{item.title}</span>
			</Link>
		</div>
	)
}

export default HomePageCard
