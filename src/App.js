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
import UI_UX from "./Components/Service/UI_UX";
import WebDevelopment from "./Components/Service/WebDevelopment";
import AppDevelopment from "./Components/Service/AppDevelopment";
import Blockchain from "./Components/Service/Blockchain";
import SEO from "./Components/Service/SEO";


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
            <Route path="/career" element={<Career />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/ui-ux" element={<UI_UX />} />
            <Route path="/service/web-development" element={<WebDevelopment />} />
            <Route path="/service/app-development" element={<AppDevelopment />} />
            <Route path="/service/blockchain" element={<Blockchain />} />
            <Route path="/service/seo" element={<SEO />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
