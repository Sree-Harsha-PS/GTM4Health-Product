import React from 'react';
import './styles.css';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './Dashboard';
import Terms from './Terms';
import Privacy from './Privacy';
import SettingsPage from './Settings';
import HelpPage from './Help';
import AdminLoginPage from './components/AdminLogin';
import AdminDashboard from './AdminDash';
import Hospital from './AdminHospital';
import AdminUserAccess from './AdminUserAccess';
//import PrivateRoute from './components/Privateroute';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard"element={<Dashboard />} />
        {/* <Route
          path="/dashboard*"
          element={
            <PrivateRoute
              element={<Dashboard />}
            /> /* Wrap PrivateRoute inside the element prop */
          }
        {/* /> Use PrivateRoute for the dashboard */} 
        <Route path='/admin' element={<AdminLoginPage />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='admin/dashboard/Add-Hospital' element={<Hospital />} />
        <Route path='admin/dashboard/User-Dashboard' element={<AdminUserAccess />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path='/termsofuse' element={<Terms />} />
        <Route path='/privacypolicy' element={<Privacy />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="landing-page">
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

