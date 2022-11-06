import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { IPriceCard } from '../../types'
import './PriceCard.scss'

const PriceCard = ({ item, activeid, setActiveid }: { item: IPriceCard; activeid: number; setActiveid: (id: number) => void }) => {
	return (
		<div className={`price-card ${activeid === item.id ? 'active' : ''}`}>
			<div className="prices-card-header" onClick={() =>{
				if(activeid === item.id){
					return setActiveid(0)
				}
				return setActiveid(item.id)
			}}>
				<span className="price-card-chevron">
					<BsChevronDown />
				</span>
				<h4>{item.title}</h4>
				{item.forMonth ? <span className="price">
					${item.price} for m<sup>2</sup>/month
				</span> : <span className="price">
					${item.price} for m<sup>2</sup>
				</span>}
			</div>
			<div className="price-card-body">
				<h4>
					{item.subtitle} (from 100 m<sup>2</sup>):
				</h4>
				<ul>
					{item.list.map((listitem, index) => (
						<li key={index}>{listitem}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PriceCard
