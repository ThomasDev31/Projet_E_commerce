import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/user/login`;

        try {
            const res = await axios.post(url, form);
            setMessage(res.data.message);

            localStorage.setItem("token", res.data.token);
            if (res.data.message === "Mot de passe est bon") {
                navigate("/");
            }
        } catch (err) {
            console.error(err);
            setMessage(err.response?.data?.message || "Erreur de requête");
        }
    };

    return (
        <div className="container login">
            <div className="container-global">
                 <div className="decorations"></div>
                 <div className="container-form">
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit}>
                    <div className="container-input">
                        <input
                            type="email"
                            name="email"
                            placeholder="Nom d'utilisateur"
                            value={form.email}
                            onChange={handleChange}
                            id="email"
                            required
                        />
                    </div>
                    <div className="container-input">
                        <input
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            value={form.password}
                            onChange={handleChange}
                            id="password"
                            required
                        />
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        <div className="container-button">
            <p>{message}</p>

            <Link to="/register">
                <button className="siwtch">Passer à inscription</button>
            </Link>
        </div>
            
            </div>
           
        </div>
    );
}
export default Login;
