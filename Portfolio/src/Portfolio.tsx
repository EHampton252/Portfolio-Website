import NavBar from './components/navigation/navbar/navbar'
import './index.css'
import About from './components/sections/about-me'
import Experience from './components/sections/experience'
import Hero from './components/sections/hero'

const Portfolio = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<About />
			<Experience />
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
