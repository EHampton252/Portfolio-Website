import NavBar from './navigation/navbar/navbar'
import './Portfolio.css'
import About from './sections/about-me'
import Contact from './sections/contact'
import Experience from './sections/experience'
import Goals from './sections/goals'
import Hero from './sections/hero'
import Hobbies from './sections/hobbies'

const Portfolio = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<About />
			{/* <Goals /> */}
			<Hobbies />
			<Experience />
			<Contact />
		</>
	)
}

export default Portfolio

// Do I want to display everything on one page?

// Yes:
// 	- Nav bar becomes a local rounting tool, about me is condensed and Experience is the focus
//  - Base on https://mattfarley.ca/ and/or https://brittanychiang.com/

// No:
//  - Nav bar routes to seperate pages - one for About and another for Experience
//  - Base on https://www.adhamdannaway.com/