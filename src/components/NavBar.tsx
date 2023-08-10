import "../styles/navbar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
	const [menuVisible, setMenuVisible] = useState(false);

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

	return (
		<nav className="navbar">
			<div className="logo-container">
				<Link to="/MyPortfolio-React/#">
					<img
						src="/MyPortfolio-React/assets/logo-image.jpeg"
						alt="Logo"
						className="logo"
					/>
					<span className="nav-name">STELIOS SPYROU</span>
				</Link>
			</div>
			<div className={`menu-container ${menuVisible ? "visible" : ""}`}>
				<ul className="menu-links">
					<li>
						<Link to="/MyPortfolio-React/#" onClick={toggleMenu}>
							HOME
						</Link>
					</li>
					<li>
						<Link to="/MyPortfolio-React/#about" smooth onClick={toggleMenu}>
							ABOUT
						</Link>
					</li>
					<li>
						<Link to="/MyPortfolio-React/#projects" smooth onClick={toggleMenu}>
							PROJECTS
						</Link>
					</li>
					<li>
						<Link to="/MyPortfolio-React/#contact" smooth onClick={toggleMenu}>
							CONTACT
						</Link>
					</li>
				</ul>
			</div>
			<button className="menu-button" onClick={toggleMenu}>
				<FaBars className="menu-icon" />
			</button>
		</nav>
	);
};

export default NavBar;
