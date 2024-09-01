import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import Features from './pages/features.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Dashboard from './pages/dashboard.js';
import UrlInput from './pages/urlInput.js';

function App() {
  const [monitoredUrl, setMonitoredUrl] = useState('');

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/urlInput" 
          element={<UrlInput setMonitoredUrl={setMonitoredUrl} />} 
        />
        <Route 
          path="/dashboard" 
          element={<Dashboard monitoredUrl={monitoredUrl} />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
