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

// Inside the HospitalPortal component
const handleDeleteHospital = async (id) => {
  // Show a confirmation dialog before deleting
  const confirmed = window.confirm('Are you sure you want to delete this hospital?');
  if (!confirmed) {
    return;
  }

  try {
    await axios.delete(`http://localhost:5000/api/admin/dashboard/Add-Hospital/${id}`);
    // Remove the deleted hospital from the state
    setHospitals(hospitals.filter((hospital) => hospital._id !== id));
    // Show a success message or perform any other actions
    console.log('Hospital deleted successfully');
  } catch (error) {
    console.error(error);
    // Show an error message or perform any other error handling
    console.log('Error deleting hospital');
  }
};

  

  return (
    <div className="page-view">
      <AdminHeader />
      <div className="d-content">
        <div className="dashboard">
          <AdminMenuBar />
          <div className="page-title">
            <h1 className="page-title-child">Hospital List - City Wise</h1>
          </div>
          <div className="table-content">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>City</th>
                  <th>Doctor Name</th>
                  <th>Specialization</th>
                  <th>Contact Email</th>
                  <th>Contact Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {hospitals.map((hospital) => (
                  <tr key={hospital._id}>
                    <td>{hospital.name}</td>
                    <td>{hospital.city}</td>
                    <td>{hospital.docName}</td>
                    <td>{hospital.docSpez}</td>
                    <td>{hospital.mail}</td>
                    <td>{hospital.phone}</td>
                    <td>
                    <button className="delete-button" onClick={() => handleDeleteHospital(hospital._id)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    </td>
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
