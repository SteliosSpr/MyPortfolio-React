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
						Hi there! I am Stelios Spyrou and i am thrilled to share a bit about
						myself. I attend University of Piraeus in{" "}
						<strong>Digital Systems</strong>, where i developed a strong
						foundation. My journey to front-end development began with a
						fascination for crafting web interfaces that not only look
						aesthetically pleasing but also provide seamless user experiences.
					</p>
					<p>
						I am on a continuous learning journey, exploring new technologies
						and staying up-to-date with the latest trends to deliver the best
						solutions. In the future, I aspire to become a highly capable and
						irreplaceable member of the company that i will work, in order to
						take on new challenges and provide the best possible results for
						both me and them.
					</p>
					<p>
						Finally, I'd love to connect with fellow developers, designers, or
						potential collaborators. So, feel free to <strong>reach out</strong>
						, either from the{" "}
						<strong className="word-link" onClick={handleClickLink}>
							LinkedIn
						</strong>{" "}
						or by sending me email from the <strong>CONTACT form</strong> of
						this Website, in order to create something amazing together.
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
