import {BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ConsultPage from "./pages/ConsultPage";

export default function App() { 
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/consult" element={<ConsultPage />} />
        </Routes>    
      </BrowserRouter>
      
    
  );
};