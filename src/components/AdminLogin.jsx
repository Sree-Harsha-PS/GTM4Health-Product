// Needs to clean unwanted code.

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Header from './Header';
import Footer from './Footer';
import LogoHeader from './Logoheader';
// require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config();
console.log("process.env", process.env.BASE_URL);

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault(); // Prevent the default form submission
  
  //   // Check if the email and password fields are empty
  //   if (!email || !password) {
  //     console.log('Email and password are required');
  //     return;
  //   }
  
  //   // Check if the entered email and password match the predefined values
  //   if (email === 'a@a' && password === '123') {
  //     try {
  //       // Simulate the API response with a delay
  //       await new Promise((resolve) => setTimeout(resolve, 1000));
  
  //       // Store the token in local storage
  //       localStorage.setItem('token', 'your_token_here');
  
  //       // Redirect to the appropriate dashboard 
  //       navigate('/admin/dashboard');
  //     } catch (error) {
  //       console.error('Login failed', error);
  //       // Clear the entered password field
  //       setPassword('');
  //     }
  //   } else {
  //     console.log('Invalid email or password');
  //   }
  // };
  



  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Check if the email and password fields are empty
    if (!email || !password) {
      console.log('Email and password are required');
      return;
    }
  
    try {
      // Make a POST request to the server to authenticate the admin
      const response = await axios.post('${process.env.BASE_URL}/api/admin/login', {
        email,
        password,
      });
  
      // Store the token in local storage
      localStorage.setItem('token', response.data.token);
  
      // Redirect to the appropriate dashboard
      navigate('/admin/dashboard');
      
    } catch (error) {
      console.error('Login failed', error);
      // Clear the entered password field only if the login failed
      if (error.response && error.response.status === 401) {
        setPassword('');
      }
    }
  };
  

  return (
    <div className='page-view'>
      <LogoHeader />
      <div className="login-container">
        <h1 className="signup-title">
          <span className='blue-t'>Admin</span> Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="centrepage">
            <div className="log-field">
              <label htmlFor="email">&nbsp; &nbsp; &nbsp; &nbsp; Email*&nbsp; :</label>
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="log-field">
              <label htmlFor="password">Password*&nbsp; :</label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="subm-row">
              <button className="login-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminLoginPage;
