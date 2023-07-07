import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import Menubar from "./components/MenuBar";
import useAuth from "./components/useAuth";
import axios from "axios";


const MarketAccess = () => {
  const [hospitals, setHospitals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchHospitals();
  }, [currentPage]);

const fetchHospitals = async () => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/hospital-portal?page=${currentPage}&limit=${pageSize}`
    );
    setHospitals(response.data.hospitals);
    setTotalRows(response.data.totalRows);
    setTotalPages(response.data.totalPages);
  } catch (error) {
    console.error(error);
  }
};

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

return (
  <div className="page-view">
    <Header2 />
    <div className="d-content">
      <div className="dashboard">
        <Menubar />
        <div className="page-title">
          <h1 className="page-title-child">Market Access: Healthcare Centers - City Wise</h1>
        </div>
        <div className="page-display">
          <h4 className="total-rows">Total Healthcare Centers = {totalRows}</h4>
          <h4 className="right">
            <i>Displaying Page {currentPage} of {totalPages}</i>
          </h4>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-buttons">
          {!isFirstPage && (
            <button className="prev-button" onClick={handlePrevPage}>
              &laquo; Prev
            </button>
          )}
          {!isLastPage && (
            <button className="next-button" onClick={handleNextPage}>
              Next &raquo;
            </button>
          )}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
};

export default MarketAccess;