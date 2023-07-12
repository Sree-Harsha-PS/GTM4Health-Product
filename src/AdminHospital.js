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

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/dashboard/Add-Hospital', {
        name,
        city,
        state,
        infraSer,
        docName,
        docSpez,
        mail,
        phone
      });
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
      const errorMessage = 'Healthcare Centre addition failed. Please try again.';
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

  const renderCityOptions = () => {
    if (state === 'Karnataka') {
      return (
        <>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Mangalore">Mangalore</option>
          <option value="Davanagere">Davanagere</option>
          <option value="Shivamogga">Shivamogga</option>
          <option value="Chitradurga">Chitradurga</option>
          <option value="Belgaum">Belgaum</option>
        </>
      );
    } else if (state === 'Maharashtra') {
      return (
        <>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
        </>
      );
    } else if (state === 'Telangana') {
      return <option value="Hyderabad">Hyderabad</option>;
    } else if (state === 'Andhra Pradesh') {
      return <option value="Vishakapatnam">Vishakapatnam</option>;
    } else if (state === "Sikkim") {
      return <option value="Gangtok">Gangtok</option>;
    }
    // state capitals for the remaining states and union territories
    else if (state === "Andaman and Nicobar Islands") {
      return <option value="Port Blair">Port Blair</option>;
    } else if (state === "Arunachal Pradesh") {
      return <option value="Itanagar">Itanagar</option>;
    } else if (state === "Assam") {
      return <option value="Dispur">Dispur</option>;
    } else if (state === "Bihar") {
      return <option value="Patna">Patna</option>;
    } else if (state === "Chhattisgarh") {
      return <option value="Raipur">Raipur</option>;
    } else if (state === "Goa") {
      return <option value="Panaji">Panaji</option>;
    } else if (state === "Gujarat") {
      return <option value="Gandhinagar">Gandhinagar</option>;
    } else if (state === "Haryana") {
      return <option value="Chandigarh">Chandigarh</option>;
    } else if (state === "Himachal Pradesh") {
      return <option value="Shimla">Shimla</option>;
    } else if (state === "Jharkhand") {
      return <option value="Ranchi">Ranchi</option>;
    } else if (state === "Kerala") {
      return <option value="Thiruvananthapuram">Thiruvananthapuram</option>;
    } else if (state === "Madhya Pradesh") {
      return <option value="Bhopal">Bhopal</option>;
    } else if (state === "Manipur") {
      return <option value="Imphal">Imphal</option>;
    } else if (state === "Meghalaya") {
      return <option value="Shillong">Shillong</option>;
    } else if (state === "Mizoram") {
      return <option value="Aizawl">Aizawl</option>;
    } else if (state === "Nagaland") {
      return <option value="Kohima">Kohima</option>;
    } else if (state === "Odisha") {
      return <option value="Bhubaneswar">Bhubaneswar</option>;
    } else if (state === "Puducherry") {
      return <option value="Puducherry">Puducherry</option>;
    } else if (state === "Punjab") {
      return <option value="Chandigarh">Chandigarh</option>;
    } else if (state === "Rajasthan") {
      return <option value="Jaipur">Jaipur</option>;
    } else if (state === "Sikkim") {
      return <option value="Gangtok">Gangtok</option>;
    } else if (state === "Tamil Nadu") {
      return <option value="Chennai">Chennai</option>;
    } else if (state === "Telangana") {
      return <option value="Hyderabad">Hyderabad</option>;
    } else if (state === "Tripura") {
      return <option value="Agartala">Agartala</option>;
    } else if (state === "Uttar Pradesh") {
      return <option value="Lucknow">Lucknow</option>;
    } else if (state === "Uttarakhand") {
      return <option value="Dehradun">Dehradun</option>;
    } else if (state === "West Bengal") {
      return <option value="Kolkata">Kolkata</option>;
    } else if (state === "Chandigarh") {
      return <option value="Chandigarh">Chandigarh</option>;
    } else if (state === "Dadra and Nagar Haveli and Daman and Diu") {
      return (
        <>
          <option value="Silvassa">Silvassa</option>
          <option value="Daman">Daman</option>
        </>
      );
    } else if (state === "Lakshadweep") {
      return <option value="Kavaratti">Kavaratti</option>;
    } else if (state === "Delhi") {
      return <option value="New Delhi">New Delhi</option>;
    } else if (state === "Jammu and Kashmir") {
      return <option value="Srinagar">Srinagar</option>;
    } else if (state === "Ladakh") {
      return <option value="Leh">Leh</option>;
    } else {
      return <option disabled value=''>State is required *</option>;
    }
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
                <label htmlFor="state">State</label>
                <select id="state" value={state} onChange={handleStateChange}>
                  <option disabled hidden value="">
                    Select State
                  </option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Ladakh">Ladakh</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <select
                  id="city"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option disabled hidden value="">
                    Select City
                  </option>
                  {renderCityOptions()}
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
                <label htmlFor="docName">Contact Name:</label>
                <input
                  type="text"
                  id="docName"
                  value={docName}
                  onChange={(e) => setDocName(e.target.value)}
                  placeholder="Contact Name"
                  className="form-outline"
                />
              </div>
              <div className="form-group">
                <label htmlFor="docSpez">Role:</label>
                <input
                  type="text"
                  id="docSpez"
                  value={docSpez}
                  onChange={(e) => setDocSpez(e.target.value)}
                  placeholder="Role"
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
              <button type="submit" className="hsubtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hospital;
