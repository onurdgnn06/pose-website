import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Status from './Status.jsx';
import './index.css';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </Router>
  );
}

export default Main;
