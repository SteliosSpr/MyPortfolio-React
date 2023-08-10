import "../../styles/hero.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
	const handleClickLinkedIn = () => {
		window.open(
			"https://gr.linkedin.com/in/stelios-spyrou-67a224271?trk=people-guest_people_search-card",
			"_blank"
		);
	};

	const handleClickGitHub = () => {
		window.open("https://github.com/SteliosSpr", "_blank");
	};

	return (
		<div className="hero-container">
			<h1>HI, MY NAME IS STELIOS SPYROU</h1>
			<br />
			<p>
				I am a Front-End Web Developer trying to build beautiful Responsive
				Websites, in order companies to achieve their goals faster.
			</p>
			<Link to="/MyPortfolio-React/#projects" smooth>
				PROJECTS
			</Link>
			<div className="hero-side-container">
				<AiFillLinkedin
					className="linkedin-icon"
					onClick={handleClickLinkedIn}
				/>
				<AiFillGithub className="github-icon" onClick={handleClickGitHub} />
			</div>
			<div className="hero-mouse-animation">
				<div className="mouse"></div>
			</div>
		</div>
	);
};

export default Hero;
