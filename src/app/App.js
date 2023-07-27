// Landing Page of the Product
// Has React routes of other pages
// All Project Modules are being imported to this page.

import React from 'react';
import './styles.css';
import Content from '../users/home/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from '../log/SignupPage';
import LoginPage from '../log/LoginPage';
import Dashboard from '../users/home/Dashboard';
import Terms from '../common/Terms';
import Privacy from '../common/Privacy';
import SettingsPage from '../common/Settings';
import HelpPage from '../common/Help';
import AdminLoginPage from '../log/AdminLogin';
import AdminDashboard from '../admin/pages/AdminDash';
import Hospital from './admin/healthcare/AdminHospital';
import AdminUserAccess from '../admin/users/AdminUserAccess';
import AdminFeatures from '../admin/pages/AdminFeatures';
import HospitalPortal from './admin/healthcare/AdminViewHosp';
import MarketAccess from '../users/services/marketaccess/MarketAccess';
import CityPortal from './admin/healthcare/AdminCityHosp';
import Dealers from './admin/medtech/AdminDealers';
import DealerPortal from './admin/medtech/AdminViewDealer';
import Products from './admin/products/AdminProducts';
import ProductPortal from './admin/products/AdminViewProducts';
import StartupForm from './admin/startups/AdminStartups';
import StartupPortal from './admin/startups/AdminViewStartup';
import CreateProject from './admin/projects/AdminProjects';
import UpdateProject from './admin/projects/AdminUpdateProjects';
import MarketAccessAll from '../users/services/marketaccess/MarketAccessAll';
import AdminSaveProject from './admin/projects/AdminSaveProject';
import NotFoundPage from '../common/NotFound';
//import PrivateRoute from './components/Privateroute';

//Entry Function into the Product
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
        <Route path='/admin/dashboard/Features' element={<AdminFeatures />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='admin/dashboard/Add-Hospital' element={<Hospital />} />
        <Route path='admin/dashboard/View-Hospital' element={<HospitalPortal />} />
        <Route path='admin/dashboard/City-Hospital' element={<CityPortal />} />
        <Route path='admin/dashboard/User-Dashboard' element={<AdminUserAccess />} />
        <Route path='admin/dashboard/Add-MedTech-Companies' element={<Dealers />} />
        <Route path='admin/dashboard/View-MedTech-Companies' element={<DealerPortal />} />
        <Route path='admin/dashboard/Add-Products' element={<Products />} />
        <Route path='admin/dashboard/View-Products' element={<ProductPortal />} />
        <Route path='admin/dashboard/Add-Startups' element={<StartupForm />} />
        <Route path='admin/dashboard/View-Startups' element={<StartupPortal />} />
        <Route path='admin/dashboard/Create-Project' element={<CreateProject />} />
        <Route path='admin/dashboard/Update-Project' element={<UpdateProject />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path='/termsofuse' element={<Terms />} />
        <Route path='/privacypolicy' element={<Privacy />} />
        <Route path="/dashboard/Market-Access" element={<MarketAccess />} />
        <Route path='/dashboard/View-Healthcare-Centres-All' element={<MarketAccessAll />} />
        <Route path='/admin/dashboard/Save-Project' element={<AdminSaveProject />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

//Landing Page
function Home() {
  return (
    <div className="landing-page">
      <div className="content">
        <Content />
      </div>
    </div>
  );
}
