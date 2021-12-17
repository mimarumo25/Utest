import React, { useEffect, useState } from "react";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { ModalResultados } from "./ModalResultados";
import { listarResultadosVocaActions } from "../../actions/listarResultadosVocaActions";

export default function ResultadosVocacional() {
  const { categoria } = useSelector((store) => store.categoria);
  const { resultado } = useSelector((store) => store.listarResultadosVoca);

  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});
  const [vocacion, setVocacion] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarResultadosVocaActions());
  }, [dispatch]);

  const hanndleModal = (cat) => {
    const resp = resultado?.filter(
      (rs) => rs.area?.toLowerCase() === cat.toLowerCase()
    );
    setVocacion(cat)
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
                A) Arte y creatividad{"  "}
                <small
                  className=" btn-outline-primary my-1"
                  onClick={() => hanndleModal("Arte y creatividad")}
                >
                  Ver Más
                </small>
              </label>
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
              <label htmlFor="">
                B) Ciencias sociales{"  "}
                <small
                  className=" btn-outline-success my-1"
                  onClick={() => hanndleModal("Ciencias sociales")}
                >
                  Ver Más
                </small>
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
                C) Economía, administración y finanzas{"  "}
                <small
                  className=" btn-outline-info my-1"
                  onClick={() =>
                    hanndleModal("Economía, administración y finanzas")
                  }
                >
                  Ver Más
                </small>
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
                D) Ciencia y tecnología{"  "}
                <small
                  className=" btn-outline-warning my-1"
                  onClick={() => hanndleModal("Ciencia y tecnología")}
                >
                  Ver Más
                </small>
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
                E)Ciencias ecológicas, biológicas y de la salud{"  "}
                <small
                  className=" btn-outline-danger my-1"
                  onClick={() =>
                    hanndleModal(
                      "Ciencias ecológicas, biológicas y de la salud"
                    )
                  }
                >
                  Ver Más
                </small>
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
              <ModalResultados
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={data}
                result={"vocacional"}
                area={vocacion}
              />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
