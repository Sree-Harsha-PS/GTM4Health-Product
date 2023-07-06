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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      fetchHospitals();
    }
  }, [isAuthenticated, currentPage]);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/hospital-portal?page=${currentPage}&limit=${pageSize}`);
      setHospitals(response.data.hospitals);
      setTotalRows(response.data.totalRows);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteHospital = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this hospital?");
    if (!confirmed) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/admin/dashboard/Add-Hospital/delete-hospital/${id}`);
      setHospitals(hospitals.filter((hospital) => hospital._id !== id));
      console.log("Hospital deleted successfully");
    } catch (error) {
      console.error(error);
      console.log("Error deleting hospital");
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
      console.log("Hospital updated successfully");
    } catch (error) {
      console.error(error);
      console.log("Error updating hospital");
    }
  };

  const totalPages = Math.ceil(totalRows / pageSize);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevPage = () => {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

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
          <div className="page-title">
            <h1 className="page-title-child">
              Healthcare Centres- City Wise 
            </h1>
          </div>
          <div className="table-content">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Sl No.</th>
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
                {hospitals.map((hospital, index) => (
                  <tr key={hospital._id}>
                    <td>{(currentPage - 1) * pageSize + index + 1}</td>
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
          <div className="pagination-buttons">
            {!isFirstPage && (
              <button className="prev-button" onClick={handlePrevPage}>
                Prev
              </button>
            )}
            {!isLastPage && (
              <button className="next-button" onClick={handleNextPage}>
                Next
              </button>
            )}
          </div>
          <div className="total-rows">Total Healthcare Centers = {totalRows}</div>
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
