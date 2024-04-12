import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Career from "./Pages/Career";
import Free from "./Components/Free";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Free />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/career" element={<Career />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
