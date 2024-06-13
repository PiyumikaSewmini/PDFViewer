import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Pdfviewpage from './components/pdfviewpage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          <Route path="/Homepage" element={isLoggedIn ? <Homepage /> : <Navigate to="/Login" />} />
          <Route path="/Pdfviewpage" element = {<Pdfviewpage/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
