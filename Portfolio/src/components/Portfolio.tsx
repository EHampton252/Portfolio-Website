import NavBar from './navigation/navbar/navbar'
import './Portfolio.css'
import Contact from './sections/contact'
import Experience from './sections/experience'
import Goals from './sections/goals'
import Hobbies from './sections/hobbies'

const Portfolio = () => {
	return (
		<>
			<NavBar />
			<Goals />
			<Hobbies />
			<Experience />
			<Contact />
		</>
	)
}

export default Portfolio
