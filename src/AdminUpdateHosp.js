import React, { useState, useEffect } from "react";
import axios from "axios";

const EditHospitalForm = ({ hospital, onUpdate, onCancel }) => {
  const [name, setName] = useState(hospital.name);
  const [city, setCity] = useState(hospital.city);
  const [docName, setDocName] = useState(hospital.docName);
  const [docSpez, setDocSpez] = useState(hospital.docSpez);
  const [mail, setMail] = useState(hospital.mail);
  const [phone, setPhone] = useState(hospital.phone);
  const [infraSer, setInfraSer] = useState(hospital.infraSer);
  const [state, setState] = useState(hospital.state);

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity("");
  };

  useEffect(() => {
    setName(hospital.name);
    setCity(hospital.city);
    setDocName(hospital.docName);
    setDocSpez(hospital.docSpez);
    setMail(hospital.mail);
    setPhone(hospital.phone);
    setInfraSer(hospital.infraSer);
    setState(hospital.state);
  }, [hospital]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      city,
      docName,
      docSpez,
      mail,
      phone,
      infraSer,
      state,
    };
    onUpdate(hospital._id, updatedData);
  };

  const renderCityOptions = () => {
    if (state === "Karnataka") {
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
    } else if (state === "Maharashtra") {
      return (
        <>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
        </>
      );
    } else if (state === "Telangana") {
      return <option value="Hyderabad">Hyderabad</option>;
    } else if (state === "Andhra Pradesh") {
      return <option value="Vishakapatnam">Vishakapatnam</option>;
    } else if (state === "Sikkim") {
      return <option value="Gangtok">Gangtok</option>;
    } else if (state === "Andaman and Nicobar Islands") {
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
    } else if (state === "Punjab") {
      return <option value="Chandigarh">Chandigarh</option>;
    } else if (state === "Rajasthan") {
      return <option value="Jaipur">Jaipur</option>;
    } else if (state === "Sikkim") {
      return <option value="Gangtok">Gangtok</option>;
    } else if (state === "Tamil Nadu") {
      return <option value="Chennai">Chennai</option>;
    } else if (state === "Tripura") {
      return <option value="Agartala">Agartala</option>;
    } else if (state === "Uttar Pradesh") {
      return <option value="Lucknow">Lucknow</option>;
    } else if (state === "Uttarakhand") {
      return <option value="Dehradun">Dehradun</option>;
    } else if (state === "West Bengal") {
      return <option value="Kolkata">Kolkata</option>;
    } else if (state === "Jammu and Kashmir") {
      return <option value="Srinagar">Srinagar</option>;
    } else if (state === "Ladakh") {
      return <option value="Leh">Leh</option>;
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
    } else {
      return <option disabled value=''>State is required *</option>;
    }
  };

  return (
    <div className="edit-form">
      <h2>Edit Hospital</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select id="state" value={state} onChange={handleStateChange}>
            <option disabled value="">
              Select State
            </option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
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
          <label htmlFor="infraServ">Infrastructure & Services</label>
          <textarea
            id="infraServ"
            value={infraSer}
            onChange={(e) => setInfraSer(e.target.value)}
            placeholder="Infrastructure & Services"
            className="textarea"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="docName">Contact Name</label>
          <input
            type="text"
            id="docName"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="docSpez">Role</label>
          <input
            type="text"
            id="docSpez"
            value={docSpez}
            onChange={(e) => setDocSpez(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mail">Contact Email</label>
          <input
            type="email"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn-primary">
            Update
          </button>
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditHospitalForm;
