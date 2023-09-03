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
			<div className='nav-bar'>
				<a href="#hero">Home</a>
				<a href="#goals">Goals</a>
				<a href="#experience">Experience</a>
				<a href="#hobbies">Hobbies</a>
				<a href="#contact">Contact</a>
			</div>
		</>
	)
}

export default NavBar
