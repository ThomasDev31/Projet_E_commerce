import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import Header from './assets/layout/Header';
import Home from './assets/pages/Home';
import Logout from './assets/pages/Logout';
import "./assets/styles/global.css"
import { useEffect, useState } from 'react';


function App() {
const [token, setToken ] = useState('')
useEffect(() => {
  const getToken = localStorage.getItem('token')
  setToken(getToken)
},[token])
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!token && (
          <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </>
        )}
        {token && (
          <Route path="/logout" element={<Logout />} />
        )}
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App
