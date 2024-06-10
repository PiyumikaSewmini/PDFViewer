import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login"
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/Login" element={<Login />} />
                  
        </Routes>
      </div>
    </Router>
  );
}

export default App;