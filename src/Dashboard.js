import React from "react";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import useAuth from "./components/useAuth";


const Dashboard = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // Optional: Show a loading state or return null while checking authentication
    return null;
  }
  return (
    <div className="content">
      <Header2 />
      <div className="dashboard">
        {/* Your protected dashboard content */}
        <h1>Welcome to the Dashboard!</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;