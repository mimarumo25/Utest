import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Principal from '../containers/Principal'
import Testinteligence from '../components/test/testInteligence/TestInteligence.jsx'

export const DashboardRoutes = () => {
  
  return (
    <div>
      <Routes>
        <Route exact path="/*" element={<Principal/>} />
        <Route exact path="/test" element={<Testinteligence />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};


