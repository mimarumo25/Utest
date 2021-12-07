import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Principal from '../containers/Principal'
import Testinteligence from '../components/test/testInteligence/TestInteligence.jsx'
import Runtest from "../components/test/testInteligence/Runtest";

export const DashboardRoutes = () => {
  
  return (
    <div>
      <Routes>
        <Route exact path="/*" element={<Principal/>} />
        <Route exact path="/test" element={<Testinteligence />} />
        <Route exact path="/runtest" element={<Runtest />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};


