import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/components/Navbar";
// // import NotFound from "./pages/components/NotFound";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
// import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contacts />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
