import React from "react";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer.jsx";
import { useSelector } from "react-redux";

export default function ResultadosPersonalidad() {
    const {categoria} = useSelector(store => store.categoria)     
   return (
    <div>
      <NavBar />
      <div className="container">
        <div className="card border-primary mb-3" style={{ width: "50rem" }}>
          <div className="card-header">Resutados</div>
          <div className="card-body text-primary">
            <div className="nombreCategoria">
                <label htmlFor="">A) Colérico</label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: `${categoria[0][0]}%` }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{`${categoria[0][0]}%`}</div>
              </div>
            </div>

            <div className="nombreCategoria">
            <label htmlFor="">B) Apasionado</label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  style={{ width: `${categoria[0][1]}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{`${categoria[0][1]}%`}</div>
              </div>
            </div>

            <div className="nombreCategoria">
                <label htmlFor="">C) Sanguíneo</label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  style={{ width: `${categoria[0][2]}%` }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{`${categoria[0][2]}%`}</div>
              </div>
            </div>

            <div className="nombreCategoria">
                <label htmlFor="">D) Flemático</label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-warning"
                  role="progressbar"
                  style={{ width: `${categoria[0][3]}%` }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{`${categoria[0][3]}%`}</div>
              </div>
            </div>

            <div className="nombreCategoria">
              <label htmlFor="" >E) Nervioso</label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-danger"
                  role="progressbar"
                  style={{ width: `${categoria[0][4]}%` }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{`${categoria[0][4]}%`}</div>
              </div>
            </div>

            <div className="nombreCategoria">
              <label htmlFor="" >F) Sentimental</label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-dark"
                  role="progressbar"
                  style={{ width: `${categoria[0][5]}%` }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{`${categoria[0][5]}%`}</div>
              </div>
            </div>


            <div className="nombreCategoria">
              <label htmlFor="" >G) Amorfo</label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-secondary"
                  role="progressbar"
                  style={{ width: `${categoria[0][6]}%` }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{`${categoria[0][6]}%`}</div>
              </div>
            </div>

            <div className="nombreCategoria">
              <label htmlFor="" >H) Apatico</label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-secondary"
                  role="progressbar"
                  style={{ width: `${categoria[0][6]}%` }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{`${categoria[0][6]}%`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
  
}