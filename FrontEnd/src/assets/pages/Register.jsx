import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        const url = `http://localhost:5000/user/register`;

        try {
            const res = await axios.post(url, form);
            setMessage(res.data.message);
            if (res.data.message === "Mot de passe est bon") {
                navigate("/login");
            }
        } catch (err) {
            console.error(err);
            setMessage(err.response?.data?.message || "Erreur de requête");
        }
    };

    return (
        <div>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Nom d'utilisateur"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">S'enregistrer</button>
            </form>

            <p>{message}</p>

            <Link to="/login">
                <button>Passer à la connexion</button>
            </Link>
        </div>
    );
}
export default Login;
