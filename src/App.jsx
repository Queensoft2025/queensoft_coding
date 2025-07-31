import React from "react";
import { Routes, Route } from "react-router-dom";

// Import all components used in the routes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import DigitalMarketingPage from "./pages/DigitalMarketingPage/DigitalMarketingPage";
import GoogleMyBusiness from "./pages/GoogleMyBusiness/GoogleMyBusiness";
import GoogleAds from "./pages/GoogleAds/GoogleAds";
import WebsiteDesigning from "./pages/WebsiteDesigning/WebsiteDesigning";
import BrandingSEO from "./pages/Branding/BrandingSEO";
import GraphicDesigning from "./pages/GraphicDesign/GraphicDesigning";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/google-my-business" element={<GoogleMyBusiness />} />
        <Route path="/google-ads" element={<GoogleAds />} />
        <Route path="/website-designing" element={<WebsiteDesigning />} />
        <Route path="/branding" element={<BrandingSEO />} />
        <Route path="/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
      
    </div>
  );
};

export default App;
