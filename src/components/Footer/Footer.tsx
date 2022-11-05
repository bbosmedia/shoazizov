import React from 'react'
import { Link } from 'react-router-dom'
import openWebTarget from '../../helpers/openWeb'
import './Footer.scss'

const Footer = () => {
	const date = new Date().getFullYear()
	return (
		<footer className="footer">
			<div className="footer-main">
				<h2>SHOAZIZOV</h2>
				<span>Interior Design Group in Tashkent</span>
				<p>&copy; SHOAZIZOV 2018-{date}</p>
			</div>
			<ul className="footer-links">
				<li className="footer-link-item">
					<Link to="/">Home</Link>
				</li>
				<li className="footer-link-item">
					<Link to="/">Projects</Link>
				</li>
				<li className="footer-link-item">
					<Link to="/">About</Link>
				</li>
				<li className="footer-link-item">
					<Link to="/">Contact</Link>
				</li>
			</ul>
			<ul className="footer-links">
				<li className="footer-link-item">
					<Link to="/">#Villa</Link>
				</li>
				<li className="footer-link-item">
					<Link to="/">#Hi-Tech</Link>
				</li>
				<li className="footer-link-item">
					<Link to="/">#Dacha</Link>
				</li>
			</ul>
			<div className='footer-last'>
				<p className="footer-location">Komolon 30, Tashkent, Uzbekistan</p>
				<span>
					Mail for suppliers: <a href="mailto:abbos.nurgulshanov@mail.ru">abbos.nurgulshanov@mail.ru</a>
				</span>
                <ul className='footer-socials'>
                    <li>
                        <button onClick={()=>openWebTarget('https://www.facebook.com/')}>Facebook</button>
                    </li>
                    <li>
                        <button onClick={()=>openWebTarget('https://www.instagram.com/')}>Instagram</button>
                    </li>
                    <li>
                        <button onClick={()=>openWebTarget('https://www.telegram.com/')}>Telegram</button>
                    </li>
                </ul>
				<p>
					Site made by <button onClick={() => openWebTarget('https://abbosfrelancer.netlify.app/')}>Abbos Nurgulshanov</button>
				</p>
			</div>
		</footer>
	)
}

export default Footer
