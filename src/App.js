import React from 'react';
import './styles.css';
import Logo from './components/Logo';
import SignUpButton from './components/Signup';
import LoginButton from './components/Login';
import RequestDemoButton from './components/Demo';
import Content from './Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
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

