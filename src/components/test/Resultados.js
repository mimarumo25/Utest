import React, { useEffect, useState } from "react";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { ModalResultados } from "./ModalResultados";
import { listarResultadosInteActions } from "../../actions/listarResultadosInteActions";
import { app, db } from "../../firebase/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

import { Button } from "reactstrap";
import Swal from "sweetalert2";

export default function Resultados() {
  const { resultado } = useSelector((store) => store.listarResultadosInt);
  const user = useSelector((store) => store.login);

  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});
  const [datos, setDatos] = useState("");
  const [carrerasInt, setCarrerasInt] = useState({});
  const [dataCarrerasInt, setDataCarrerasInt] = useState({});
  const [boton, setBoton] = useState(false);
  const dispatch = useDispatch();
  const { categoria } = useSelector((store) => store.categoria);

  useEffect(() => {
    dispatch(listarResultadosInteActions());
  }, [dispatch]);

  useEffect(() => {
    listarCarrerasInte();
  }, [data]);
  const listarCarrerasInte = async () => {
    const querySnapshot = await getDocs(
      collection(db, "carrerastipointeligencia")
    );
    const respuesta = [];
    querySnapshot.forEach((doc) => {
      respuesta.push({
        ...doc.data(),
      });
    });
    setCarrerasInt(respuesta);
  };

  const hanndleModal = (cat) => {
    const resp = resultado.find(
      (rs) => rs.categoria?.toLowerCase() === cat.toLowerCase()
    );
    const resp1 = carrerasInt.filter(
      (rs) => rs.area?.toLowerCase() === cat.toLowerCase()
    );
    setModalShow(true);
    setData(resp);
    setDatos(cat);
    setDataCarrerasInt(resp1);
  };
  const saveTest = () => {
    const fecha = new Date();
    const datosTest = {
      a: categoria[0][0],
      b: categoria[0][1],
      c: categoria[0][2],
      d: categoria[0][3],
      c: categoria[0][4],
      d: categoria[0][5],
      f: categoria[0][6],
      user: user.id,
      fecha: fecha.toLocaleDateString(),
    };
    console.log(datosTest);
    addDoc(collection(db, `testRealizados`), datosTest)
      .then((resp) => {
        Swal.fire("Gardar!", "Datos Guardados Exitosamente!", "success");
        setBoton(true);
      })
      .catch((error) => {
        Swal.fire(
          "Error!",
          "Error al Guardar los Datos en la base de datos!",
          "error"
        );
      });
  };
  const hanndleGuardarTest = () => {
    saveTest();
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="d-flex justify-content-around">
          <div className="card border-primary mb-3" style={{ width: "50rem" }}>
            <div className="card-header">Resutados</div>
            <div className="card-body text-primary">
              <div className="nombreCategoria">
                <label>
                  A) Inteligencia Verbal{"  "}
                  <small
                    className=" btn-outline-primary my-1"
                    onClick={() => hanndleModal("Inteligencia Verbal")}
                  >
                    Ver M??s
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
                  B) Inteligencia L??gico-matem??tica{"  "}
                  <small
                    className=" btn-outline-success my-1"
                    onClick={() =>
                      hanndleModal("Inteligencia L??gico-matem??tica")
                    }
                  >
                    Ver M??s
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
                  C) Inteligencia Visual espacial{"  "}
                  <small
                    className=" btn-outline-info my-1"
                    onClick={() => hanndleModal("inteligencia visual espacial")}
                  >
                    Ver M??s
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
                  D) Inteligencia kinestesica-corporal{"  "}
                  <small
                    className=" btn-outline-warning my-1"
                    onClick={() =>
                      hanndleModal("Inteligencia kinestesica-corporal")
                    }
                  >
                    Ver M??s
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
                  E) Inteligencia Musical-r??tmica{"  "}
                  <small
                    className=" btn-outline-danger my-1"
                    onClick={() => hanndleModal("Inteligencia Musical-r??tmica")}
                  >
                    Ver M??s
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

              <div className="nombreCategoria">
                <label htmlFor="">
                  F) Inteligencia Intrapersonal{"  "}
                  <small
                    className=" btn-outline-dark my-1"
                    onClick={() => hanndleModal("Inteligencia Intrapersonal")}
                  >
                    Ver M??s
                  </small>
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
                  E) Inteligencia Interpersonal{"  "}
                  <small
                    className=" btn-outline-secondary my-1"
                    onClick={() => hanndleModal("Inteligencia Interpersonal")}
                  >
                    Ver M??s
                  </small>
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
              <ModalResultados
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={data}
                result={"inteligencia"}
                carrera={dataCarrerasInt}
              />
            </div>
          </div>

          <div className="col-3">
            <div className="d-grid ">
              {/* boton === true ? (
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={hanndleGuardarTest}
                  disabled
                >
                  <span
                    className="iconify"
                    data-icon="fluent:save-16-regular"
                    data-width="36"
                    data-height="36"
                    
                  ></span>
                  Guardar Test
                </button>
              ) : (
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={hanndleGuardarTest}
                 
                >
                  <span
                    className="iconify"
                    data-icon="fluent:save-16-regular"
                    data-width="36"
                    data-height="36"
                  ></span>
                  Guardar Test
                </button>
              ) */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
