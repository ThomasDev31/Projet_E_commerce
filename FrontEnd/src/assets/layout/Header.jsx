import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
	return (
		<header className="container_Header">
			<nav className="container_Nav_01">
				<NavLink className="nav_section" to="/">
					<img
						src=""
						alt="PLACEHOLDER : Logo E-commerce entreprise de qualité"
					/>
				</NavLink>
                <input className="search_Section" type="Search" placeholder="Type your search here ... plz" />
				<NavLink className="nav_section" to="/login">
					<button className="nav_button">Login</button>
				</NavLink>
                <NavLink className="nav_section" to="/logout">
					<button className="nav_button">Logout</button>
				</NavLink>
				<NavLink className="nav_section" to="/register">
					<button className="nav_button">Register</button>
				</NavLink>
			</nav>
			<nav className="container_Nav_02">
				<button>Truc 01</button>
				<button>Truc 02</button>
				<button>Truc 03</button>
			</nav>
		</header>
	);
}
export default Header;
