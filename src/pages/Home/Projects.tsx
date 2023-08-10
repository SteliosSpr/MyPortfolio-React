import "../../styles/projects.css";
import { HashLink as Link } from "react-router-hash-link";

const Projects = () => {
	return (
		<div className="projects-container">
			<div className="projects-header-container">
				<h1>PROJECTS</h1>
				<hr />
				<p>
					Here you can see some of the projects that i have worked with, as well
					as pieces of information and link for every one of them.
				</p>
			</div>
			<div className="projects-content-container">
				<img src="/MyPortfolio-React/assets/vue-app.png" alt="" />
				<div className="projects-information">
					<h3>SimpleTask</h3>
					<p>SimpleTask is a project i developed, in order to learn Vue.js .</p>
					<Link to="/MyPortfolio-React/simpleTask#">MORE</Link>
				</div>
			</div>
			<div className="projects-content-container">
				<img src="/MyPortfolio-React/assets/angular-app.png" alt="" />
				<div className="projects-information">
					<h3>Game Bay</h3>
					<p>Game Bay is a project i developed, in order to learn Angular.</p>
					<Link to="/MyPortfolio-React/gameBay#">MORE</Link>
				</div>
			</div>
			<div className="projects-content-container">
				<img src="/MyPortfolio-React/assets/react-app.png" alt="" />
				<div className="projects-information">
					<h3>MyPortfolio</h3>
					<p>MyPortfolio is a project i developed, in order to learn React.</p>
					<Link to="/MyPortfolio-React/myPortfolio#">MORE</Link>
				</div>
			</div>
		</div>
	);
};

export default Projects;
