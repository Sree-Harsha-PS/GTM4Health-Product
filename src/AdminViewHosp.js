import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import AdminHeader from "./components/AdminHeader";
import AdminMenuBar from "./components/AdminMenubar";
import useAuth from "./components/useAuth";
import axios from "axios";
import EditHospitalForm from "./AdminUpdateHosp";

const HospitalPortal = () => {
  const isAuthenticated = useAuth();
  const [hospitals, setHospitals] = useState([]);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

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

  const handleDeleteHospital = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this hospital?');
    if (!confirmed) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/admin/dashboard/Add-Hospital/delete-hospital/${id}`);
      setHospitals(hospitals.filter((hospital) => hospital._id !== id));
      console.log('Hospital deleted successfully');
    } catch (error) {
      console.error(error);
      console.log('Error deleting hospital');
    }
  };

  const handleEditHospital = (hospital) => {
    setSelectedHospital(hospital);
    setEditFormVisible(true);
  };

  const handleUpdateHospital = async (id, updatedData) => {
    try {
      const requestData = {
        data: updatedData,
      };

      await axios.put(`http://localhost:5000/api/admin/dashboard/Add-Hospital/hospitals/${id}`, requestData);
      setEditFormVisible(false);
      setSelectedHospital(null);
      fetchHospitals();
      console.log('Hospital updated successfully');
    } catch (error) {
      console.error(error);
      console.log('Error updating hospital');
    }
  };

  const fetchHospitals = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/hospital-portal");
      setHospitals(response.data.hospitals);
    } catch (error) {
      console.error(error);
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
                      <button className="edit-button" onClick={() => handleEditHospital(hospital)}>
                        <i className="fas fa-pencil-alt"></i>
                      </button>
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
      {editFormVisible && (
        <EditHospitalForm
          hospital={selectedHospital}
          onUpdate={(id, updatedData) => handleUpdateHospital(id, updatedData)}
          onCancel={() => setEditFormVisible(false)}
        />
      )}
      <Footer />
    </div>
  );
};

export default HospitalPortal;
