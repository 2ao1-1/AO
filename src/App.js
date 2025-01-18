import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./App/Home";
import About from "./App/About";
import Navbar from "./App/components/Navbar";
import NotFound from "./App/components/NotFound";
import Projects from "./App/Projects";
import Contacts from "./App/Contact";
import Services from "./App/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
