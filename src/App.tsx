import "./styles/normalize.css";
import "./style.css";
import "./styles/global.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./pages/Home/Hero";
import AboutMe from "./pages/Home/AboutMe";
import Projects from "./pages/Home/Projects";
import Contact from "./pages/Home/Contact";
import Footer from "./components/Footer";
import ProjectInformation from "./pages/Project/ProjectInformation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div app-container>
				<div>
					<NavBar />
				</div>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<section id="hero" className="hero-section">
									<Hero />
								</section>
								<section id="about" className="about-section">
									<AboutMe />
								</section>
								<section id="projects" className="projects-section">
									<Projects />
								</section>
								<section id="contact" className="contact-section">
									<Contact />
								</section>
							</>
						}
					/>
					<Route
						path="/simpleTask"
						element={
							<ProjectInformation
								projectName="SimpleTask"
								projectGitHubLink="https://github.com/SteliosSpr/SimpleTask-Vue.js"
								imagePath="/assets/vue-app.png"
								paragraphContent="<p>SimpleTask is a project i developed in order to learn and get familiar with Vue.js . It is a Website with a Home page, a Customers page, a Products page and a Users page.</p><br/><p> In Customers page the user can see a list with the customers and some information about them. In Products page the user can see the list of products, some information about them and if he wants he can check the checkbox of a product and press the delete button in order to delete only one of them each time. In Users page the user can see the list of users with some information about them and if he wants he can press the add user button in order to go to another page and create a new user, who will be also displayed in the list of the users.</p><br/> <p>This Website uses generally Vue.js and the Session Storage for the removal of the products and the creation of new users.</p>"
								techName1="Vue.js"
								techName2="HTML"
								techName3="CSS"
								techName4="JavaScript"
								techName5="SessionStorage"
							/>
						}
					/>
					<Route
						path="/gameBay"
						element={
							<ProjectInformation
								projectName="Game Bay"
								projectGitHubLink="https://github.com/SteliosSpr/Game-Angular"
								imagePath="/assets/angular-app.png"
								paragraphContent="<p>Game Bay is a project i developed in order to learn and get familiar with Angular. It is a Website that takes information about games from an API in order to display them along with information about them.</p><br/><p>In the Home Page it displays the Upcoming Games, the Popular Games and the New Games. Also, the user can search for games from the Search Bar in order to display them in a new page. Furthermore, by clicking a game it displays in a new page information about this specific game like description, carousel of screenshots (with Bootstrap) and more.</p><br/><p>In this Project i used Angular, but for some functionalities i implemented Routing, Bootstrap, Routing and calling Data through API.</p>"
								techName1="Angular"
								techName2="HTML"
								techName3="CSS"
								techName4="JavaScript"
								techName5="TypeScript"
								techName6="Bootstrap"
								techName7="Routing"
							/>
						}
					/>
					<Route
						path="/myPortfolio"
						element={
							<ProjectInformation
								projectName="Myportfolio"
								projectGitHubLink="https://github.com/SteliosSpr/MyPortfolio-React"
								imagePath="/assets/vue-app.png"
								paragraphContent="<p>MyPortfolio is a project i developed in order to learn and get familiar with React. It is a Website that serves as my Portfolio and displays information about me.</p><br/><p>It has the following sections: Home, About, Projects and Contact. Also, in the Projects section the user can click the project which he is interested about and go to another page, containing more information about this and the projects' GitHub link. Also the user can fill in the contact form in order to reach out to me.</p><br/><p>In this Project i used React, but for some functionalities i implemented Routing, EmailJS and more. </p>"
								techName1="React"
								techName2="HTML"
								techName3="CSS"
								techName4="JavaScript"
								techName5="TypeScript"
								techName6="Routing"
								techName7="EmailJS"
							/>
						}
					/>
				</Routes>
				<div>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
