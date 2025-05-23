import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import Home from './assets/pages/Home';
import Header from './assets/layout/Header';
import "./assets/styles/global.css"
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App
