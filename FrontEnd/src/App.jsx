import { useState } from 'react';
import './App.css';
import User from './assets/pages/User';
import Home from './assets/layout/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App
