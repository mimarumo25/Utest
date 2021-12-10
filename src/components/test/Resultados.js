import React from "react";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer.jsx";
import { useSelector } from "react-redux";

export default function Resultados() {
  const { categorias } = useSelector((store) => store.categoria);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="card border-primary mb-3" style={{ width: "50rem" }}>
          <div className="card-header">Resutados</div>
          <div className="card-body text-primary">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{width: '10%'}}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{width: '25%'}}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{width: '50%'}}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{width: '75%'}}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div>
            <label htmlFor="" className="label">mmmmmmmm</label>
            <div className="progress">
                
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{width: '100%'}}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
