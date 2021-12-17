import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

export const ModalResultados = (props) => {
  const [datosU, setDatosU] = useState([]);
  const [datosV, setDatosV] = useState([]);
  useEffect(() => {
    obtenerUniversidad();
  }, []);
  useEffect(() => {
    obtenerVideos();
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
  const obtenerVideos = async () => {
    console.log(props.area);
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${props?.area}&type=video&key=AIzaSyDUhW1yAFZX6wjVOSXnWTNPPFUmBxnUq9E`
      )
      .then((resp) => {
        setDatosV(resp.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (props.result === "personalidad") {
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
                  <a
                    href="https://portal.icetex.gov.co/Portal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instituto Colombiano de Crédito Educativo y Estudios
                    Técnicos en el Exterior – ICETEX
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mineducacion.gov.co/portal/secciones/Becas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ministerio de Educación Nacional
                  </a>
                </li>
                <li>
                  <a
                    href="https://becascolombia.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Becas Colombia
                  </a>
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
  } else if (props.result === "vocacional") {
    return (
      <Modal
        {...props}
        fullscreen="xxl-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h3 className="text-center text-uppercase">
            Recomendaciones Según el Resultado del Test Vocacional
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <h4>Carreras recomendadas para el área de {props?.area}</h4>
              {props.data.length > 0 ? (
                props.data.map((p, i) => (
                  <div key={i}>
                    <h5>
                      <li className="text-capitalize">{p.profesiones}</li>
                    </h5>
                  </div>
                ))
              ) : (
                <p>Error al cargar los datos...</p>
              )}
            </div>
            <div className="col-md-5">
              <h4>Universidades Cerca</h4>
              <div className="text-justify">
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
              </div>
              <h4>Infromacion Importante sobre becas en Colombia</h4>
              <p className="text-justify">
                <li>
                  <a
                    href="https://portal.icetex.gov.co/Portal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instituto Colombiano de Crédito Educativo y Estudios
                    Técnicos en el Exterior – ICETEX
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mineducacion.gov.co/portal/secciones/Becas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ministerio de Educación Nacional
                  </a>
                </li>
                <li>
                  <a
                    href="https://becascolombia.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Becas Colombia
                  </a>
                </li>
              </p>

              <h4 className="text-capitalize">Rankings Relacionados</h4>
              <p>
                <li>
                  <a
                    href=" https://www.webometrics.info/es/latin_america_es/colombia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-capitalize"
                  >
                    Mejores Universidades Colombia
                  </a>
                </li>
                <li>
                  <a
                    href=" https://ingresealau.edu.co/blog/carreras-universitarias-mejor-pagadas-y-con-mayor-oferta-laboral-en-colombia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-capitalize"
                  >
                    CARRERAS UNIVERSITARIAS MEJOR PAGADAS Y CON MAYOR OFERTA
                    LABORAL EN COLOMBIA
                  </a>
                </li>
              </p>
              <h4>Videos Relacionados con {props.area}</h4>
              {datosV?.map((v) => (
                <div key={v.id}>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${v.id.videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (props.result === "inteligencia") {
    console.log(datosV);
    return (
      <Modal
        {...props}
        fullscreen="xxl-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h3 className="text-center text-uppercase">
            Recomendaciones Según el Resultado del Test de Inteligencia
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <h4>Caracteristicas de la {props?.area}</h4>
              <p>{props.data.resultado}</p>
            </div>
            <div className="col-md-6">
              <h4>Universidades Cerca</h4>
              <div className="text-justify">
               
                {datosU?.map((u) => (
                  <div key={u?.c_digo_instituci_n}>
                    <li className="listas">
                      <span
                        class="iconify"
                        data-icon="fa-solid:university"
                      ></span>{" "}
                      <a
                        href={`https://${u?.p_gina_web}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        fs-6 text
                      >
                        {u?.nombre_instituci_n}
                      </a>
                    </li>
                  </div>
                ))}
               
              </div>
              <h4 className="pt-3">Infromacion Importante sobre becas en Colombia</h4>
              <div className="text-justify">
                <li>
                  <a
                    href="https://portal.icetex.gov.co/Portal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instituto Colombiano de Crédito Educativo y Estudios
                    Técnicos en el Exterior – ICETEX
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mineducacion.gov.co/portal/secciones/Becas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ministerio de Educación Nacional
                  </a>
                </li>
                <li>
                  <a
                    href="https://becascolombia.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Becas Colombia
                  </a>
                </li>
              </div>

              <h4 className="text-capitalize pt-3">Rankings Relacionados</h4>
              <div>
                <li>
                  <a
                    href=" https://www.webometrics.info/es/latin_america_es/colombia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-capitalize"
                  >
                    Mejores Universidades Colombia
                  </a>
                </li>
                <li>
                  <a
                    href=" https://ingresealau.edu.co/blog/carreras-universitarias-mejor-pagadas-y-con-mayor-oferta-laboral-en-colombia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-capitalize"
                  >
                    CARRERAS UNIVERSITARIAS MEJOR PAGADAS Y CON MAYOR OFERTA
                    LABORAL EN COLOMBIA
                  </a>
                </li>
              </div>
              <h4>Videos Relacionados con {props.area}</h4>
              {datosV?.map((v, i) => (
                <div key={i}>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${v.id.videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
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
