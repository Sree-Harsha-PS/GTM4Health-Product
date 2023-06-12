import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [agreed, setAgreed] = useState(false); // state for the checkbox

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!agreed) {
      console.error('Please agree to the terms and conditions.');
      return;
    }

    try {
      // Make a POST request to the server to create a new user
      const response = await axios.post('http://localhost:5000/api/signup', {
        name,
        phone,
        email,
        password,
        role,
      });

      // After successful signup, navigate to another page
      navigate('/success');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div className="left-section">
          <div className="form-field">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              placeholder="Enter your Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              placeholder="Enter phone number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              placeholder="Enter Mail ID"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="right-section">
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
          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="role">What is your role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option disabled hidden value="">
                Choose your role
              </option>
              <option value="healthcare_entrepreneur">
                Healthcare Entrepreneur
              </option>
              <option value="engineer">Engineer</option>
              <option value="doctors">Doctors</option>
              <option value="dealers_distributers">
                Dealers/Distributers
              </option>
              <option value="hospitals_labs">Hospitals/Labs</option>
              <option value="student">Student</option>
              <option value="incubator_accelerator">
                Incubator/Accelerator
              </option>
              <option value="investor">Investor</option>
              <option value="none">None of the above</option>
            </select>
          </div>
        </div>
        <br />
        <div className="subm-row">
          <div className="tnc">
            <input
              type="checkbox"
              id="termsAndConditions"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <label htmlFor="termsAndConditions">
              I agree to the terms and conditions of GTM4Health Platform
            </label>
          </div>
          <button type="submit" disabled={!agreed}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
