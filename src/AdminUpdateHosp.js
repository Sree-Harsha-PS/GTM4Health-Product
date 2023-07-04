import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateHospital = ({ hospitalId }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [docName, setDocName] = useState("");
  const [docSpez, setDocSpez] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [hospitalStatus, setHospitalStatus] = useState(null);

  useEffect(() => {
    // Fetch hospital details using the hospitalId prop
    const fetchHospitalDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/hospitals/${hospitalId}`);
        const { name, city, docName, docSpez, mail, phone } = response.data;
        setName(name);
        setCity(city);
        setDocName(docName);
        setDocSpez(docSpez);
        setMail(mail);
        setPhone(phone);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospitalDetails();
  }, [hospitalId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/hospitals/${hospitalId}`, {
        name,
        city,
        docName,
        docSpez,
        mail,
        phone,
      });
      setHospitalStatus("success");
    } catch (error) {
      console.error(error);
      setHospitalStatus("failure");
    }
  };

  const renderHospitalStatusMessage = () => {
    if (hospitalStatus === "success") {
      return <div className="popup success">Hospital updated successfully!</div>;
    } else if (hospitalStatus === "failure") {
      return (
        <div className="popup failure">
          Hospital update failed. Please try again.
          <br />
          {/* Add error message or perform additional error handling */}
          <button onClick={() => setHospitalStatus(null)}>Try Again</button>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2>Update Hospital</h2>
      {renderHospitalStatusMessage()}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="docName">Doctor Name</label>
        <input
          type="text"
          id="docName"
          value={docName}
          onChange={(e) => setDocName(e.target.value)}
        />

        <label htmlFor="docSpez">Specialization</label>
        <input
          type="text"
          id="docSpez"
          value={docSpez}
          onChange={(e) => setDocSpez(e.target.value)}
        />

        <label htmlFor="mail">Contact Email</label>
        <input
          type="text"
          id="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <label htmlFor="phone">Contact Mobile</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateHospital;
