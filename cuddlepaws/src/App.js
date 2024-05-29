import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Routes
import Home from './components/home.js'
import Items from './components/items.js'
import Sell from './components/sell.js'
import SignIn from './components/signin.js'
import SignUp from './components/signup.js'

import './App.css';
import Navbar from './components/navbar.js'

function App() {
  return (
    <div className='app'>
    <Router>
    <Navbar />
        <Routes>
          <Route path="/items" element={<Items />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
