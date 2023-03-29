import {BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./contexts/dataContext";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ConsultPage from "./pages/ConsultPage";
import RegisterPage from "./pages/RegisterPage"

export default function App() { 
  
  return (
      <BrowserRouter>
       <DataProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>    
       </DataProvider>
      </BrowserRouter>
      
    
  );
};