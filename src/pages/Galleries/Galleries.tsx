import React from 'react'
import { useParams, useRoutes } from 'react-router-dom'
import { dataCards } from '../Home/data.cards'
import './Galleries.scss'

const Galleries = () => {
	const params = useParams()
	const item = dataCards.filter((data) => data.id === Number(params['id']))[0]
	return (
		<div className="galleries-page">
			<img src={item.mainImage} alt={item.title} />
			<h2 className="gallery-name">{item.title}</h2>

			{item.images.map((imageurl, index) => (
				<img src={imageurl} key={index} alt={item.title} />
			))}
		</div>
	)
}

export default Galleries
