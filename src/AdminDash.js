import React from "react";
import Footer from "./components/Footer";
import AdminHeader from "./components/AdminHeader";
import AdminMenuBar from "./components/AdminMenubar";
import useAuth from "./components/useAuth";

const AdminDashboard = () => {
  const isAuthenticated = useAuth();

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
        <div className="dashboard-content">
          <h1>Welcome Admin!</h1>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default AdminDashboard;
