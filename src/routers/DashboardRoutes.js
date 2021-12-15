import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Principal from '../containers/Principal'
import Testinteligence from '../components/test/testInteligence/TestInteligence.jsx'
import Runtest from "../components/test/testInteligence/Runtest";
import Resultados from "../components/test/ResultadosVocacional";
import TestPersonalidad from "../components/test/testInteligence/TestPersonalidad";
import TestVocacional from "../components/test/testInteligence/TestVocacional";
import ResultadosPersonalidad from "../components/test/ResultadosPersonalidad";
import ResultadosVocacional from "../components/test/ResultadosVocacional";
import validacionradio from "../components/pruebavalidaciones/validacionradio";
import Validacionradio from "../components/pruebavalidaciones/validacionradio";

export const DashboardRoutes = () => {
  
  return (
    <div>
      <Routes>
        <Route exact path="/*" element={<Principal/>} />
        <Route exact path="/test/:test" element={<Testinteligence />} />
        <Route exact path="/testinteligencia" element={<Runtest />} />
        <Route exact path="/testvocacional" element={<TestVocacional />} />
        <Route exact path="/testPersonalidad" element={<TestPersonalidad />} />
        <Route exact path="/validacion" element={<Validacionradio />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route exact path="/resultTest" element={<Resultados/>} />
        <Route exact path="/resultadosPersonalidad" element={<ResultadosPersonalidad/>} />
        <Route exact path="/resultadosVocacional" element={<ResultadosVocacional/>} />
        
      </Routes>
    </div>
  );
};


