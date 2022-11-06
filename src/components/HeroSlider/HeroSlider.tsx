import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './HeroSlider.scss'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const HeroSlider = () => {
	const ref = useRef<Slider>(null)

	const next = () => {
		ref.current?.slickNext()
	}
	const prev = () => {
		ref.current?.slickPrev()
	}
	const settings = {
		arrows: false,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<div className="hero-slider">
			<Slider ref={ref} {...settings}>
				<div key={1}>
					<img src="https://hot-walls.ru/wp-content/uploads/2022/10/2_result-1920x1000.jpg" alt="" />
				</div>
				<div key={2}>
					<img src="https://hot-walls.ru/wp-content/uploads/2022/10/21_result-1920x1200.jpg" alt="" />
				</div>
				<div key={3}>
					<img src="https://hot-walls.ru/wp-content/uploads/2022/06/1_result-2-1920x960.jpg" alt="" />
				</div>
			</Slider>
			<div className="hero-box">
				<div className="compnay-name">
					<h2>SHOAZIZOV</h2>
					<p>Architect Design Group</p>
				</div>
				<div className="slider-btns">
					<button onClick={() => next()}>
						Next <BsArrowRight />
					</button>
					<button onClick={() => prev()}>
						<BsArrowLeft /> Prev
					</button>
				</div>
			</div>
		</div>
	)
}

export default HeroSlider
