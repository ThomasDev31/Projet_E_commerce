import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
	return (
		<header className="container_Header">
			<nav className="container_Nav">
				<NavLink className="nav_section" to="/">
					<button className="nav_button">Home</button>
				</NavLink>
				<NavLink className="nav_section" to="/login">
					<button className="nav_button">Login</button>
				</NavLink>
				<NavLink className="nav_section" to="/register">
					<button className="nav_button">Register</button>
				</NavLink>
			</nav>
		</header>
	);
}
export default Header;
