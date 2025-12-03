import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { RECAPTCHA_SITE_KEY } from './config/recaptcha';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import LegalNotice from './pages/LegalNotice';
import Privacy from './pages/Privacy';
import PrivacyCuisinEssentiel from './pages/PrivacyCuisinEssentiel';
import NotFound from './pages/NotFound';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <Router>
        <ScrollToTop />
        <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/realisations" element={<Portfolio />} />
              <Route path="/prestations" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/confidentialite" element={<Privacy />} />
              <Route path="/privacy-cuisinessentiel" element={<PrivacyCuisinEssentiel />} />
              {/* Route 404 - doit être en dernier */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GoogleReCaptchaProvider>
  );
};

export default App;