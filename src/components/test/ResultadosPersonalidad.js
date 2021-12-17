import React, { useEffect, useState } from "react";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { listarResultadosPersActions } from "../../actions/listarResultadosPersActions";
import { ModalResultados } from "./ModalResultados";

export default function ResultadosPersonalidad() {
  const { categoria } = useSelector((store) => store.categoria);
  const { resultado } = useSelector((store) => store.listarResultadosPers);
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarResultadosPersActions());
  }, []);

  const hanndleModal = (cat) => {
    const resp = resultado.find(
      (rs) => rs.categoria?.toLowerCase() === cat.toLowerCase()
    );
    setModalShow(true);
    setData(resp);
  };
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="card border-primary mb-3" style={{ width: "50rem" }}>
          <div className="card-header">Resutados</div>
          <div className="card-body text-primary">
            <div className="nombreCategoria">
              <label htmlFor="">
                A) Colérico{" "}
                {categoria[0][0] >= 45 ? (
                  <small
                    className=" btn-outline-primary my-1"
                    onClick={() => hanndleModal("Colerico")}
                  >
                    Ver Más
                  </small>
                ) : (
                  ""
                )}
              </label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: `${categoria[0][0]}%` }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {`${categoria[0][0]}%`}
                </div>
              </div>
            </div>

            <div className="nombreCategoria">
              <label htmlFor="">
                B) Apasionado{" "}
                {categoria[0][1] >= 45 ? (
                  <small
                    className="btn-outline-success my-1"
                    onClick={() => hanndleModal("apasionado")}
                  >
                    Ver Más
                  </small>
                ) : (
                  ""
                )}
              </label>
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
              <label htmlFor="">
                C) Sanguíneo{" "}
                {categoria[0][2] >= 45 ? (
                  <small
                    className=" btn-outline-info my-1"
                    onClick={() => hanndleModal("sanguineo")}
                  >
                    Ver Más
                  </small>
                ) : (
                  ""
                )}
              </label>
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
              <label htmlFor="">
                D) Flemático{" "}
                {categoria[0][3] >= 45 ? (
                  <small
                    className=" btn-outline-warning my-1"
                    onClick={() => hanndleModal("Flematico")}
                  >
                    Ver Más
                  </small>
                ) : (
                  ""
                )}
              </label>
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
              <label htmlFor="">
                E) Nervioso{" "}
                {categoria[0][4] >= 45 ? (
                  <small
                    className=" btn-outline-danger my-1"
                    onClick={() => hanndleModal("nervioso")}
                  >
                    Ver Más
                  </small>
                ) : (
                  ""
                )}
              </label>
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
              <label htmlFor="">
                F) Sentimental{" "}
                {categoria[0][5] >= 45 ? (
                  <small
                    className=" btn-outline-dark my-1"
                    onClick={() => hanndleModal("sentimental")}
                  >
                    Ver Más
                  </small>
                ) : (
                  ""
                )}
              </label>
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
              <label htmlFor="">
                G) Amorfo{" "}
                {categoria[0][6] >= 45 ? (
                  <small
                    className=" btn-outline-secondary my-1"
                    onClick={() => hanndleModal("amorfo")}
                  >
                    Ver Más
                  </small>
                ) : (
                  ""
                )}
              </label>
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
              <label htmlFor="">
                H) Apatico{" "}
                {categoria[0][7] > 45 ? (
                  <small
                    className=" btn-outline-secondary my-1"
                    onClick={() => hanndleModal("apatico")}
                  >
                    Ver Más
                  </small>
                ) : (
                  ""
                )}
              </label>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-secondary"
                  role="progressbar"
                  style={{ width: `${categoria[0][7]}%` }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{`${categoria[0][7]}%`}</div>
              </div>
            </div>
            <ModalResultados
              show={modalShow}
              onHide={() => setModalShow(false)}
              data={data}
              result={"personalidad"}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
