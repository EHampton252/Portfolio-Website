import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter } from 'react-router-dom'
import Experience from '../../sections/experience'
import Hobbies from '../../../pages/hobbiesPage'
import Goals from '../../sections/goals'
import ReactDOM from 'react-dom/client'
import Hero from '../../sections/hero'
import './navbarStyles.css'
import React from 'react'
import Home from '../../../pages/home'

const NavBar = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			children: [
				{
					path: 'hobbies',
					element: <Hobbies />,
				},
				{
					path: 'experience',
					element: <Experience />,
				},
				{
					path: 'goals',
					element: <Goals />,
				},
			],
		},
	])

	return (
		<>
			<div className='nav-bar'>
				<a href='#hero'>Home</a>
				<a href='#experience'>Experience</a>
				<a href='#hobbies'>Hobbies</a>
				<a href='#contact'>Contact</a>
			</div>
		</>
	)
}

export default NavBar

// Rebuild me ^^^^
