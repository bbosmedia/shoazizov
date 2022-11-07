import React from 'react'
import './BeforeAfter.scss'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import { Link } from 'react-router-dom'

const BeforeAfter = () => {
	return (
		<div className="before-after-page">
			<h2 className="site-title">Before and After</h2>
			<div className="before-after-page-inner">
				<div className="before-after-card">
					<ReactBeforeSliderComponent
						secondImage={{
							imageUrl: 'https://hot-walls.ru/wp-content/uploads/2022/07/Volodin_614A3632.jpg',
							alt: 'Moscow City',
						}}
						firstImage={{
							imageUrl: 'https://hot-walls.ru/wp-content/uploads/2022/07/Volodin_614A3632-HDR-1.jpg',
							alt: 'Moscow City',
						}}
					/>
					<div className="before-after-card-body">
						<h4>Moscow City</h4>
						<p>Дизайнеры нашей студии оформили квартиру в башне “Федерация”, Москва-Сити, Москва.</p>
                        <Link to="/galleries/4">More about the project</Link>
					</div>
				</div>
				<div className="before-after-card">
					<ReactBeforeSliderComponent
						secondImage={{
							imageUrl: 'https://hot-walls.ru/wp-content/uploads/2021/06/614A7670-HDR-00_result.jpg',
							alt: 'Moscow City',
						}}
						firstImage={{
							imageUrl: 'https://hot-walls.ru/wp-content/uploads/2021/06/614A7670-HDR_result-1.jpg',
							alt: 'Moscow City',
						}}
					/>
					<div className="before-after-card-body">
						<h4>Vander Park, 88</h4>
						<p>Дизайнеры нашей студии оформили квартиру в башне “Федерация”, Москва-Сити, Москва.</p>
                        <Link to="/galleries/2">More about the project</Link>
					</div>
				</div>
				<div className="before-after-card">
					<ReactBeforeSliderComponent
						secondImage={{
							imageUrl: 'https://hot-walls.ru/wp-content/uploads/2021/01/Volodin_614A5916-HDR_result1-1024x682.jpg',
							alt: 'Moscow City',
						}}
						firstImage={{
							imageUrl: 'https://hot-walls.ru/wp-content/uploads/2022/09/IMG_7073.JPEG',
							alt: 'Moscow City',
						}}
					/>
					<div className="before-after-card-body">
						<h4>Vander Park, 88</h4>
						<p>Дизайнеры нашей студии оформили квартиру в башне “Федерация”, Москва-Сити, Москва.</p>
                        <Link to="/galleries/1">More about the project</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BeforeAfter
