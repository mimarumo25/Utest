import { Modal, Button } from "react-bootstrap";

export const ModalResultados = (props) => {
  return (
    <Modal
      {...props}
      fullscreen="xxl-down"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
            <h3 className="text-center text-uppercase">
            Detalles del Perfil <b> {props.data.categoria}</b>            
          </h3>
      
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-6">
            <h4>Caracteristicas Generales</h4>
            <p className="text-justify">{props?.data.caracteristicasGenerales}</p>
            <h4>Aspectos Positivos</h4>
            <p className="text-justify">{props?.data.aspectosPositivos}</p>
            <h4>Aspectos Negativos</h4>
            <p className="text-justify">{props?.data.aspectosNegativos}</p>
          </div>
          <div className="col-md-4">
            <h4>Profesiones Recomendadas</h4>
            <p className="text-justify">{props?.data.profesionesRecomendarse}</p>
            <h4>Universidades Cerca</h4>
            <p className="text-justify">{props?.data.profesionesRecomendarse}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};
