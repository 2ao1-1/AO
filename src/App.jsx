import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
// import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/About" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contacts />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        {/* <Route path="/blog/:title" element={<BlogPostPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
