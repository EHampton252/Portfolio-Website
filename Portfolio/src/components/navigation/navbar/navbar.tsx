import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Experience from '../../sections/experience'
import Contact from '../../sections/contact'
import Hobbies from '../../sections/hobbies'
import Goals from '../../sections/goals'
import ReactDOM from 'react-dom/client'
import Hero from '../../sections/hero'
import './navbarStyles.css'
import React from 'react'

const NavBar = () => {
	return (
		<>
			<Router>
				<nav>
					<ul className='nav-bar'>
						<li>
							<Link to='#home'>Home</Link>
						</li>
						<li>
							<Link to='#goals'>Goals</Link>
						</li>
						<li>
							<Link to='#hobbies'>Hobbies</Link>
						</li>
						<li>
							<Link to='#experience'>Experience</Link>
						</li>
						<li>
							<Link to='#contact'>Contact</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<Hero />} />
					<Route path='/goals' element={<Goals />} />
					<Route path='/hobbies' element={<Hobbies />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
		</>
	)
}

export default NavBar
