import React from "react";
import { Routes, Route, BrowserRouter, useNavigate, Outlet } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import OurApproach from "./containers/OurApproach/OurApproach";
import Terms from "./containers/Terms/Terms";
import Landing from "./containers/Landing/Landing";
import Project from "./containers/Project/Project";
import Working from "./containers/Working/Working";
import WhateWeDo from "./containers/WhatWeDo/WhatWeDo";
import FAQ from "./containers/FAQ/FAQ";
import SafetyPage from "./containers/Safety/SafetyPage";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contact from "./containers/Contact/Contact";
function App() {
  return (
    <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
        <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/our-approach" element={<OurApproach />} />
                <Route
                  path="/safety-and-sustainability"
                  element={<SafetyPage/>}
                />
                <Route path="/what-we-do" element={<WhateWeDo/>} />
                <Route path="/contact-us" element={<Contact/>} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/careers" element={<Working/>} />
                <Route path="/terms-and-conditions" element={<Terms />} />
              </Routes>
            </Layout>
    </BrowserRouter>
  );
}

export default App;
