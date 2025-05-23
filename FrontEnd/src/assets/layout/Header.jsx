import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { useEffect, useState } from "react";

function Header() {
    const [token, setToken] = useState("");
    useEffect(() => {
        const getToken = localStorage.getItem("token");
        setToken(getToken);
    }, [token]);
    return (
        <header className="container_Header">
            <nav className="container_Nav_01">
                <NavLink className="nav_section" to="/">
                    <img
                        src=""
                        alt="PLACEHOLDER : Logo E-commerce entreprise de qualité"
                    />
                </NavLink>
                <input
                    className="search_Section"
                    type="Search"
                    placeholder="Type your search here ... plz"
                />
                {!token && (
                    <>
                        <NavLink className="nav_section" to="/login">
                            login
                        </NavLink>
                        <NavLink className="nav_section" to="/register">
                            <button className="nav_button">Register</button>
                        </NavLink>
                    </>
                )}
				{token && (
					<NavLink className="nav_section" to="/logout">
                    <button className="nav_button">Logout</button>
                </NavLink>
				)}

                
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
