import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./frontend/component/Home";
import AboutPage from "./frontend/component/AboutPage.jsx";
import Resume from "./frontend/component/Resume.jsx";
import Projects from "./frontend/component/Projects.jsx"

function App() {
  return(
  
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
    </ Routes>
    );
  
}

ReactDOM.createRoot(document.getElementById("root")).render(<BrowserRouter><App /></BrowserRouter>);

