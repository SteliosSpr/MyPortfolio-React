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
				<Link to="/#">
					<img src="/assets/logo-image.jpeg" alt="Logo" className="logo" />
					<span className="nav-name">STELIOS SPYROU</span>
				</Link>
			</div>
			<div className={`menu-container ${menuVisible ? "visible" : ""}`}>
				<ul className="menu-links">
					<li>
						<Link to="/#" onClick={toggleMenu}>
							HOME
						</Link>
					</li>
					<li>
						<Link to="/#about" smooth onClick={toggleMenu}>
							ABOUT
						</Link>
					</li>
					<li>
						<Link to="/#projects" smooth onClick={toggleMenu}>
							PROJECTS
						</Link>
					</li>
					<li>
						<Link to="/#contact" smooth onClick={toggleMenu}>
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
