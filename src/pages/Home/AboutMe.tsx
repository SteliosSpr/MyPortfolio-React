import "../../styles/aboutme.css";
import { HashLink as Link } from "react-router-hash-link";

const AboutMe = () => {
	const handleClickLink = () => {
		window.open(
			"https://gr.linkedin.com/in/stelios-spyrou-67a224271?trk=people-guest_people_search-card",
			"_blank"
		);
	};

	return (
		<div className="about-me-container">
			<div className="about-me-header-container">
				<h1>ABOUT ME</h1>
				<hr />
				<p>
					Here you can learn more about me and my skills regarding the Frond-End
					Development.
				</p>
			</div>
			<div className="about-me-flex-container">
				<div className="about-me-information-container">
					<h3>Learn some things about me</h3>
					<p>
						I am a <strong>Front-End Web Developer</strong>, building beautiful
						Responsive Front-End Websites and Web Applications that result to
						faster achievement of the Company's goals.
					</p>
					<p>
						I have not so much work experience, but i always try to learn new
						technologies and develop my existing skills. So in{" "}
						<strong>PROJECTS</strong> section you can find some projects that i
						have created using different <strong>technologies</strong>.
					</p>
					<p>
						Finally, if you are <strong>interested</strong> to learn more about
						me, you can contact me either from the{" "}
						<strong className="word-link" onClick={handleClickLink}>
							LinkedIn
						</strong>{" "}
						or by sending me email from the <strong>CONTACT form</strong> of
						this Website.
					</p>
					<Link to="#contact" smooth>
						CONTACT
					</Link>
				</div>
				<div className="about-me-skills-container">
					<h3>My Skills</h3>
					<div>HTML</div>
					<div>CSS</div>
					<div>JavaScript</div>
					<div>React</div>
					<div>Vue.js</div>
					<div>Angular</div>
					<div>TypeScript</div>
					<div>Responsive Design</div>
					<div>Git</div>
					<div>Github</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
