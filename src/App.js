import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/about-us" element={<div>about-us</div>} />
        <Route path="/projects" element={<div>projects</div>} />
        <Route path="/our-approach" element={<div>our-approach</div>} />
        <Route
          path="/safety-and-sustainability"
          element={<div>safety-and-sustainability</div>}
        />
        <Route path="/what-we-do" element={<div>what-we-do</div>} />
        <Route path="/contact-us" element={<div>contact-us</div>} />
        <Route path="/faq" element={<div>faq</div>} />
        <Route path="/careers" element={<div>careers</div>} />
        <Route
          path="/terms-and-conditions"
          element={<div>terms-and-conditions</div>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
