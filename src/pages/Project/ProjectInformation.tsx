import "../../styles/projectinformation.css";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
	projectName: string;
	projectGitHubLink: string;
	imagePath: string;
	paragraphContent: string;
	techName1: string;
	techName2: string;
	techName3?: string;
	techName4?: string;
	techName5?: string;
	techName6?: string;
	techName7?: string;
}

const ProjectInformation = ({
	projectName,
	projectGitHubLink,
	imagePath,
	paragraphContent,
	techName1,
	techName2,
	techName3 = "",
	techName4 = "",
	techName5 = "",
	techName6 = "",
	techName7 = "",
}: Props) => {
	const handleClickGitHubLink = () => {
		window.open(projectGitHubLink, "_blank");
	};

	return (
		<div className="information-container">
			<div className="information-header-container">
				<h1>{projectName.toUpperCase()}</h1>
				<p>
					This page contains more information concerning the{" "}
					{projectName.toLowerCase()} Project, including the link for this
					Projects' GitHub Repository, an Overview and the Technologies that
					were used.{" "}
				</p>
				<button onClick={handleClickGitHubLink}>GitHub Repository</button>
			</div>
			<div className="information-details-container">
				<div className="information-details-image-container">
					<img src={imagePath} alt="" />
				</div>
				<div className="information-overview-container">
					<h2>Project Overview</h2>
					<div dangerouslySetInnerHTML={{ __html: paragraphContent }}></div>
				</div>
				<div className="information-technologies-container">
					<h2>Technologies Used</h2>
					<div>{techName1}</div>
					<div>{techName2}</div>
					{techName3.length !== 0 && <div>{techName3}</div>}
					{techName4.length !== 0 && <div>{techName4}</div>}
					{techName5.length !== 0 && <div>{techName5}</div>}
					{techName6.length !== 0 && <div>{techName6}</div>}
					{techName7.length !== 0 && <div>{techName7}</div>}
				</div>
				<Link to="/MyPortfolio-React/#">Go Back</Link>
			</div>
		</div>
	);
};

export default ProjectInformation;
