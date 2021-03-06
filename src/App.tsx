import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import React from "react";
import RequestAppointment from "./components/RequestAppointment";
import DoctorProfile from "./components/DoctorProfile";


const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen px-9 m-9 bg-gray-200">     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/requestAppointment/:doctorId" element={<RequestAppointment/>} />
        <Route path="/doctorProfile/:doctorId" element={<DoctorProfile/>} />
      </Routes> 
    </div>
  );
};

export default App;
