import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Make a POST request to the server to authenticate the user
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      // Store the token in local storage
      localStorage.setItem('token', response.data.token);

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
