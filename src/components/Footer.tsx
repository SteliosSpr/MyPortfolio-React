import "../styles/footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
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
		<footer>
			<p>&copy; 2023 Stelios Spyrou. All rights reserved.</p>
			<AiFillLinkedin
				className="footer-linkedin-icon"
				onClick={handleClickLinkedIn}
			/>
			<AiFillGithub
				className="footer-github-icon"
				onClick={handleClickGitHub}
			/>
		</footer>
	);
};

export default Footer;
