import React from "react";
import { useNavigate } from "react-router";
import home from "../../img/home.png";

const Home = () => {
  return (
    <div className="container-lg">
      <h1 className="text-end">Descubre oportunidades de elegir tu futuro</h1>
      <div className="d-flex">
        <img className="img-home" src={home} alt="home" />
        <div className="mt-5">
          <p className="mb-4">
            Este es un Inventario de Intereses Vocacionales y Ocupacionales, en el
            que usted encontrará un conjunto de pares de preguntas, permitiéndole
            obtener su perfil de preferencias profesionales y ocupacionales. Para
            ello sólo tiene que elegir entre dos alternativas; y, en el formulario
            de respuestas marcarás la letra “a”, la “b”, ambas “a y b” si su
            respuesta incluye las dos alternativas o N.A. (ninguna de las
            anteriores), según sea su preferencia.
          </p>
          <button className="btn btn-primary comenzar1" href="#login">
            Pruebas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
