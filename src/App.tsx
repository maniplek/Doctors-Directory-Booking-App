import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import React from "react";


const App: React.FC = () => {
  return (
    <div className="flex flex-col  h-screen px-9 m-9 bg-gray-200">     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin/>} />
      </Routes> 
    </div>
  );
};

export default App;
