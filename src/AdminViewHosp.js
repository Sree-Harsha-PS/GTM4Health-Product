import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import AdminHeader from "./components/AdminHeader";
import AdminMenuBar from "./components/AdminMenubar";
import useAuth from "./components/useAuth";
import axios from "axios";

const HospitalPortal = () => {
  const isAuthenticated = useAuth();
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hospital-portal");
        setHospitals(response.data.hospitals);
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated) {
      fetchHospitals();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    // Optional: Show a loading state or return null while checking authentication
    return null;
  }

  return (
    <div className="page-view">
      <AdminHeader />
      <div className="d-content">
        <div className="dashboard">
          <AdminMenuBar />
          <h1>Hospital Records Portal</h1>
          <div className="table-content">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>City</th>
                  {/* Add more table headers if needed */}
                </tr>
              </thead>
              <tbody>
                {hospitals.map((hospital) => (
                  <tr key={hospital._id}>
                    <td>{hospital.name}</td>
                    <td>{hospital.city}</td>
                    {/* Add more table cells for additional features */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HospitalPortal;
