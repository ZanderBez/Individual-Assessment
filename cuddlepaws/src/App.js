import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";
// Routes
import Home from './components/home.js';
import Items from './components/items.js';
import Sell from './components/sell.js';
import SignIn from './components/signin.js';
import SignUp from './components/signup.js';
import Edit from './components/edit.js';
import Details from './components/details.js';
import './App.css';
import Navbar from './components/navbar.js';
import { AuthProvider } from './context/Authcontext';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='app'>
      {loading ? (
        <ClockLoader
          className='spinner'
          color={'#F19600'}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <AuthProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/items" element={<Items />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
