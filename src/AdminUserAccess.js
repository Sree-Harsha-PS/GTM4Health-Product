import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import AdminHeader from "./components/AdminHeader";
import AdminMenuBar from "./components/AdminMenubar";
import useAuth from "./components/useAuth";
import axios from "axios";

const AdminUserAccess = () => {
  const isAuthenticated = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated) {
      fetchUsers();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    // Optional: Show a loading state or return null while checking authentication
    return null;
  }

  return (
    <div>
      <AdminHeader />
      <div className="d-content">
        <div className="dashboard">
          <AdminMenuBar />
          <div className="dashboard-content">
            <h1>Welcome Admin!</h1>
            <h2>User Data</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  {/* Add more table headers if needed */}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
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

export default AdminUserAccess;
