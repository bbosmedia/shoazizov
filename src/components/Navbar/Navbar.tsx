import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import openWebTarget from '../../helpers/openWeb'
import './Navbar.scss'

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false)
	const [sticky, setSticky] = useState(false)

	const handleScroll = () => {
		if (window.scrollY > 200) {
			setSticky((value) => true)
		} else {
			setSticky((value) => false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})
	return (
		<nav className='nav'>
			<div className="nav-container">
				<div className={sticky ? "navbar sticky" :"navbar"}>
					<Link className="logo" to="/">
						SHOAZIZOV
					</Link>
					<div className="menu-toggle" onClick={() => setOpen(!open)}>
						<div className={open ? 'ham-box ham-box-open' : 'ham-box'}>
							<span className={open ? 'line-top spin' : 'line-top '}></span>
							<span className={open ? 'line-bottom spin' : 'line-bottom'}></span>
						</div>
					</div>
				</div>
				<div className="nav-overlay" style={{ top: open ? '0%' : '-100%', transitionDelay: open ? '0s' : '0s' }}>
					<ul className="nav-links">
						<li className="nav-item">
							<Link to="/" onClick={() => setOpen(!open)} style={{ top: open ? '0px' : '120px', transitionDelay: open ? '0.8s' : '0s' }}>
								Home
							</Link>
							<div className="nav-item-wrapper"></div>
						</li>
						<li className="nav-item">
							<Link to="/projects" onClick={() => setOpen(!open)} style={{ top: open ? '0px' : '120px', transitionDelay: open ? '0.9s' : '0s' }}>
								Projects
							</Link>
							<div className="nav-item-wrapper"></div>
						</li>
						<li className="nav-item">
							<Link to="/about" onClick={() => setOpen(!open)} style={{ top: open ? '0px' : '120px', transitionDelay: open ? '1s' : '0s' }}>
								About
							</Link>
							<div className="nav-item-wrapper"></div>
						</li>
						<li className="nav-item">
							<Link to="/contact" onClick={() => setOpen(!open)} style={{ top: open ? '0px' : '120px', transitionDelay: open ? '1.1s' : '0s' }}>
								Contact
							</Link>
							<div className="nav-item-wrapper"></div>
						</li>
					</ul>
					<div className="nav-footer">
						<div
							className="location"
							style={{
								bottom: open ? '0px' : '-20px',
								opacity: open ? '1' : '0',
								transitionDelay: open ? '1.3s' : '0s',
							}}>
							Tashkent, UZ
						</div>
						<div className="nav-social-media">
							<ul>
								<li>
									<button
										style={{
											bottom: open ? '0px' : '-20px',
											opacity: open ? '1' : '0',
											transitionDelay: open ? '1.4s' : '0s',
										}}
										onClick={() => {
											setOpen(!open)
											openWebTarget('https://www.instagram.com/')
										}}>
										Instagram
									</button>
								</li>
								<li>
									<button
										style={{
											bottom: open ? '0px' : '-20px',
											opacity: open ? '1' : '0',
											transitionDelay: open ? '1.5s' : '0s',
										}}
										onClick={() => {
											setOpen(!open)
											openWebTarget('https://www.instagram.com/')
										}}>
										Telegram
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
