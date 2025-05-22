import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function User() {
  const [form, setForm] = useState({ name: '', password: '' });
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState('login');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/user/${mode}`; 

    try {
      const res = await axios.post(url, form);
      setMessage(res.data.message);
       if (mode === 'login' && res.data.message === 'Mot de passe est bon') {
      navigate('/'); 
    }
     
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Erreur de requête');
    }
  };

  return (
    <div >
      <h2>{mode === 'login' ? 'Connexion' : 'Inscription'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom d'utilisateur"
          value={form.name}
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
        <button type="submit">
          {mode === 'login' ? 'Se connecter' : "S'inscrire"}
        </button>
      </form>

      <p >{message}</p>

      <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
        Passer à {mode === 'login' ? 'inscription' : 'connexion'}
      </button>
    </div>
  );
}
export default User
