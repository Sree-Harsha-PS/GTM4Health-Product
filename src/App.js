import React from 'react';
import './styles.css';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './Dashboard';
import Terms from './Terms';
import Privacy from './Privacy';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard*"element={<Dashboard />} />
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

