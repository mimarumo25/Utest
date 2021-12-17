import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ModalResultados = (props) => {
  const [datosU, setDatosU] = useState([]);
  useEffect(() => {
    obtenerUniversidad();
  }, []);
  const obtenerUniversidad = async () => {
    await axios
      .get(
        "https://www.datos.gov.co/resource/n5yy-8nav.json?departamento_domicilio=Choc%C3%B3"
      )
      .then((resp) => {
        setDatosU(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if(props.result ==="personalidad")
  {
  return (
    <Modal
      {...props}
      fullscreen="xxl-down"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h3 className="text-center text-uppercase">
          Detalles del Perfil <b> {props?.data.categoria}</b>
        </h3>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-6">
            <h4>Caracteristicas Generales</h4>
            <p className="text-justify">
              {props?.data.caracteristicasGenerales}
            </p>
            <h4>Aspectos Positivos</h4>
            <p className="text-justify">{props?.data.aspectosPositivos}</p>
            <h4>Aspectos Negativos</h4>
            <p className="text-justify">{props?.data.aspectosNegativos}</p>
          </div>
          <div className="col-md-5">
            <h4>Profesiones Recomendadas</h4>
            <p className="text-justify">
              {props?.data.profesionesRecomendarse}
            </p>
            <h4>Universidades Cerca</h4>
            <p className="text-justify">
              {datosU?.map((u) => (
                <div key={u?.c_digo_instituci_n}>
                  <li>
                    <a
                      href={`https://${u?.p_gina_web}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {u?.nombre_instituci_n}
                    </a>
                  </li>
                </div>
              ))}
            </p>
            <h4>Infromacion Importante sobre becas en Colombia</h4>
            <p className="text-justify">
              <li>
                <a href="https://portal.icetex.gov.co/Portal/" target="_blank" rel="noopener noreferrer">Instituto Colombiano de Crédito Educativo y Estudios Técnicos en el Exterior – ICETEX</a>
              </li>
              <li>
                <a href="https://www.mineducacion.gov.co/portal/secciones/Becas/" target="_blank" rel="noopener noreferrer">Ministerio de Educación Nacional</a>
              </li>
              <li>
                <a href="https://becascolombia.co" target="_blank" rel="noopener noreferrer">Becas Colombia</a>
              </li>
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}else if(props.result ==="vocacional")
{
    return (
      <Modal
        {...props}
        fullscreen="xxl-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h3 className="text-center text-uppercase">
           
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <h4>Caracteristicas Generales</h4>
              <p className="text-justify">
                {}
              </p>
              <h4>Aspectos Positivos</h4>
              <p className="text-justify">{}</p>
              <h4>Aspectos Negativos</h4>
              <p className="text-justify">{}</p>
            </div>
            <div className="col-md-5">
              <h4>Profesiones Recomendadas</h4>
              <p className="text-justify">
                {}
              </p>
              <h4>Universidades Cerca</h4>
              <p className="text-justify">
                {/* datosU?.map((u) => (
                  <div key={u?.c_digo_instituci_n}>
                    <li>
                      <a
                        href={`https://${u?.p_gina_web}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {u?.nombre_instituci_n 
                      </a>
                    </li>
                    }
                  </div>
                ))*/}
              </p>
              <h4>Infromacion Importante sobre becas en Colombia</h4>
              <p className="text-justify">
                <li>
                  <a href="https://portal.icetex.gov.co/Portal/" target="_blank" rel="noopener noreferrer">Instituto Colombiano de Crédito Educativo y Estudios Técnicos en el Exterior – ICETEX</a>
                </li>
                <li>
                  <a href="https://www.mineducacion.gov.co/portal/secciones/Becas/" target="_blank" rel="noopener noreferrer">Ministerio de Educación Nacional</a>
                </li>
                <li>
                  <a href="https://becascolombia.co" target="_blank" rel="noopener noreferrer">Becas Colombia</a>
                </li>
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
}
};
