import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FasciaServicePage from './components/FasciaServicePage';
import ServicePage from './components/ServicePage';
import SpecializedGuttersPage from './components/SpecializedGuttersPage';
import RoofPaintingPage from './components/RoofPaintingPage';
import RecentProjects from './components/RecentProjects';
import AboutPage from './components/AboutPage';
import ImageGallery from './components/ImageGallery';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThankYouPage from './components/ThankYouPage';
import MobileActions from './components/MobileActions';
import ConfigManager from './components/ConfigManager';
import { useConfig } from './hooks/useConfig';

function App() {
  const { config, updateConfig } = useConfig();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar config={config} />
        <Routes>
          <Route path="/" element={<HomePage config={config} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/fascia-and-barge-boards" element={<FasciaServicePage />} />
          <Route path="/services/specialized-gutters" element={<SpecializedGuttersPage />} />
          <Route path="/services/roof-painting" element={<RoofPaintingPage />} />
          <Route path="/recent-projects" element={<RecentProjects />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/config" element={<ConfigManager updateConfig={updateConfig} />} />
        </Routes>
        <Footer config={config} />
        <MobileActions />
      </div>
    </Router>
  );
}

export default App;