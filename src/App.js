import React from "react";
import { Routes, Route, BrowserRouter, useNavigate, Outlet } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import OurApproach from "./containers/OurApproach/OurApproach";
import Terms from "./containers/Terms/Terms";
import Landing from "./containers/Landing/Landing";
import Project from "./containers/Project/Project";

function App() {
  return (
    <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
      <Routes>
        <Route
          path="/"
          element={
            <Landing/>
          }
        />
        <Route
          path="/landmark/*"
          element={
            <Layout>
              <Outlet/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<div>about-us</div>} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/our-approach" element={<OurApproach />} />
                <Route
                  path="/safety-and-sustainability"
                  element={<div>safety-and-sustainability</div>}
                />
                <Route path="/what-we-do" element={<div>what-we-do</div>} />
                <Route path="/contact-us" element={<div>contact-us</div>} />
                <Route path="/faq" element={<div>faq</div>} />
                <Route path="/careers" element={<div>careers</div>} />
                <Route path="/terms-and-conditions" element={<Terms />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
