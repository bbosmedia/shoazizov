import React, { useLayoutEffect, } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './About.scss'

const About = () => {
	useLayoutEffect(() => {
		const texts = document.querySelectorAll('.about-main-info-text')
		const textstwo = document.querySelectorAll('.about-main-info-text-two')
		gsap.registerPlugin(ScrollTrigger)

		texts.forEach((item) => {
			gsap.from(item, {
				opacity: 0,
				x: '-50%',
				duration: 1,
				stagger: 1,
				scrollTrigger: {
					trigger: item,
					scrub: 1,
					start: 'top center',
					end: 'bottom 50%',
				},
			})
		})
		textstwo.forEach((item) => {
			gsap.from(item, {
				opacity: 0,
				x: '50%',
				duration: 1,
				stagger: 1,
				scrollTrigger: {
					trigger: item,
					scrub: 1,
					start: 'top center',
					end: 'top center',
				},
			})
		})

		gsap.from('.owner-img', {
			opacity: 0,
			y: '100px',
			duration: 1,
			stagger: 1,
			scrollTrigger: {
				trigger: '.owner-img',
				scrub: 1,
				start: 'top center',
				end: 'top center',
			},
		})

		gsap.from('.owner-name', {
			opacity: 0,
			y: '100px',
			duration: 1,
			stagger: 1,
			scrollTrigger: {
				trigger: '.owner-name',
				scrub: 1,
				start: 'top center',
				end: 'top center',
			},
		})

		gsap.from('.owner-bio', {
			opacity: 0,
			y: '100px',
			duration: 1,
			stagger: 1,
			scrollTrigger: {
				trigger: '.owner-bio',
				scrub: 1,
				start: 'top center',
				end: 'top center',
			},
		})
	}, [])

	return (
		<div className="about-page">
			<div className="about-main-info">
				<h3 className="about-main-info-text">Since 2018</h3>
				<h3 className="about-main-info-text">Shoazizov group</h3>
				<h3 className="about-main-info-text-two">helping people</h3>
				<h3 className="about-main-info-text">to design</h3>
				<h3 className="about-main-info-text-two">people's dream</h3>
				<h3 className="about-main-info-text-two">and unique</h3>
				<h3 className="about-main-info-text">houses,</h3>
				<h3 className="about-main-info-text-two">offices,</h3>
				<h3 className="about-main-info-text">shopping malls.</h3>
				<h3 className="about-main-info-text">Group members</h3>
				<h3 className="about-main-info-text">designed more than</h3>
				<h3 className="about-main-info-text-two">50 projects.</h3>
			</div>
			<div className="about-owner">
				<img className="owner-img" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
				<h3 className="owner-name">Shohobiddin Shoazizov</h3>
				<p className="owner-bio">Shohobiddin Shoazizov is a senior exterior and interior designer and founder of "Shoazizov Architect Group". More than 30 Architectural projects owner.</p>
			</div>
		</div>
	)
}

export default About
