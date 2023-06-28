import React, { useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import AdminHeader from './components/AdminHeader';
import AdminMenuBar from './components/AdminMenubar';
import useAuth from './components/useAuth';

const Hospital = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting hospital form'); 
    console.log('Name:', name);
    console.log('City:', city);
    try {
      await axios.post('http://localhost:5000/api/admin/dashboard/Add-Hospital', { name, city });
      setName('');
      setCity('');
      // Optionally show a success message or perform any other actions
    } catch (error) {
      console.error(error);
      console.log('Error response:', error.response);
      // show an error message or perform any other error handling
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="d-content">
        <div className="dashboard">
          <AdminMenuBar />
          <div className="dashboard-content">
            <h1>Welcome Admin!</h1>
            <form onSubmit={handleSubmit} className="hospital-f">
              <select required value={city} onChange={(e) => setCity(e.target.value)}>
                <option disabled hidden value="">Select City</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mangalore">Mangalore</option>
                <option value="Mysore">Mysore</option>
                <option value="Davanagere">Davanagere</option>
                <option value="Shivamogga">Shivamogga</option>
                <option value="Belgaum">Belgaum</option>
              </select>
              <input
                type="text"
                required
                placeholder="Hospital Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" className="hsubtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hospital;
