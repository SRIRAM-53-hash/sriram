import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Preloader from './components/Pre'; // Ensure this path is correct
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import PopupAd from './components/PopupAd'; // Import PopupAd

function App() {
  const [load, setLoad] = useState(true);
  const [showAd, setShowAd] = useState(false); // Add state for showAd

  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    // Popup ad timeout
    const hasSeenAd = localStorage.getItem("hasSeenAd");
    if (!hasSeenAd) {
      const popupTimer = setTimeout(() => {
        setShowAd(true);
        localStorage.setItem("hasSeenAd", "true");
      }, 3000); // Show ad 3 seconds after load

      return () => {
        clearTimeout(preloaderTimer);
        clearTimeout(popupTimer);
      };
    }

    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        {showAd && <PopupAd />} {/* Show PopupAd if showAd is true */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;