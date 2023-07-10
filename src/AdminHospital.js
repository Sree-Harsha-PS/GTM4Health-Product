import React, { useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import AdminHeader from './components/AdminHeader';
import AdminMenuBar from './components/AdminMenubar';
import useAuth from './components/useAuth';

const Hospital = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [infraSer, setInfraSer] = useState('');
  const [city, setCity] = useState('');
  const [docName, setDocName] = useState('');
  const [docSpez, setDocSpez] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [hospitalStatus, setHospitalStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/dashboard/Add-Hospital', { name, city, state, infraSer, docName, docSpez, mail, phone });
      setName('');
      setCity('');
      setInfraSer('');
      setState('');
      setDocName('');
      setDocSpez('');
      setMail('');
      setPhone('');
      setHospitalStatus('success');
      
      // Clear the success message after 2 seconds
      setTimeout(() => {
          setHospitalStatus(null);
      }, 1000);

    } catch (error) {
      console.error(error);
      console.log('Error response:', error.response);
      setHospitalStatus('failure');
      // show an error message or perform any other error handling
    }
  };

  const renderHospitalStatusMessage = () => {
    if (hospitalStatus === 'success') {
      return <div className="popup success">Healthcare Centre added successfully!</div>;
    } else if (hospitalStatus === 'failure') {
      const errorMessage = "Healthcare Centre addition failed. Please try again.";
      return (
        <div className="popup failure">
          {errorMessage}
          <br />
          <button onClick={() => setHospitalStatus(null)}>Try Again</button>
        </div>
      );
    }
    return null;
  };
  

  return (
    <div className="page-view">
      <AdminHeader />
      <div className="d-content">
        <div className="dashboard">
          <AdminMenuBar />
          <div className="hosp-content">
            <h1>Add Healthcare Centres</h1>
            {renderHospitalStatusMessage()}
            <form onSubmit={handleSubmit} className="hospital-f">
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <select id="city" required value={city} onChange={(e) => setCity(e.target.value)}>
                  <option disabled hidden value="">Select City</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mangalore">Mangalore</option>
                  <option value="Mysore">Mysore</option>
                  <option value="Davanagere">Davanagere</option>
                  <option value="Shivamogga">Shivamogga</option>
                  <option value="Belgaum">Belgaum</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <select id="state" required value={state} onChange={(e) => setState(e.target.value)}>
                  <option disabled hidden value="">Select State</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Centre Name:</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Healthcare Centre Name"
                  className="form-outline"
                />
              </div>
              <div className="form-group">
                <label htmlFor="infraSer">Infrastructure & Services:</label>
                <textarea
                  id="infraSer"
                  value={infraSer}
                  onChange={(e) => setInfraSer(e.target.value)}
                  placeholder="Infrastructure & Services"
                  className="form-outline textarea"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="docName">Doctor Name:</label>
                <input
                  type="text"
                  id="docName"
                  value={docName}
                  onChange={(e) => setDocName(e.target.value)}
                  placeholder="Doctor Name"
                  className="form-outline"
                />
              </div>
              <div className="form-group">
                <label htmlFor="docSpez">Specialization:</label>
                <input
                  type="text"
                  id="docSpez"
                  value={docSpez}
                  onChange={(e) => setDocSpez(e.target.value)}
                  placeholder="Specialization"
                  className="form-outline"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mail">Contact Email:</label>
                <input
                  type="text"
                  id="mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="Contact Email"
                  className="form-outline"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Contact Mobile:</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contact Mobile"
                  className="form-outline"
                />
              </div>
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
