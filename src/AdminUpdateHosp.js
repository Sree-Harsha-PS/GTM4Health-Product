import React, { useState, useEffect } from "react"; // Added 'useEffect'
import axios from "axios";

const EditHospitalForm = ({ hospital, onUpdate, onCancel }) => {
  // Initialize state variables with the values from the 'hospital' prop
  const [name, setName] = useState(hospital.name);
  const [city, setCity] = useState(hospital.city);
  const [docName, setDocName] = useState(hospital.docName);
  const [docSpez, setDocSpez] = useState(hospital.docSpez);
  const [mail, setMail] = useState(hospital.mail);
  const [phone, setPhone] = useState(hospital.phone);

  // useEffect to update state when the 'hospital' prop changes
  useEffect(() => {
    setName(hospital.name);
    setCity(hospital.city);
    setDocName(hospital.docName);
    setDocSpez(hospital.docSpez);
    setMail(hospital.mail);
    setPhone(hospital.phone);
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
    };
    onUpdate(hospital._id, updatedData);
  };

  return (
    <div className="edit-form">
      <h2>Edit Hospital</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields with their respective values */}
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
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="docName">Doctor Name</label>
          <input
            type="text"
            id="docName"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="docSpez">Specialization</label>
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
