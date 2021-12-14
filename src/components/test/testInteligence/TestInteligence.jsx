import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import NavBar from "../../navbar/Navbar";

const Testinteligence = () => {
  const { test } = useParams();

  if (test === "testinteligencia") {
    return (
      <div>
        <NavBar />
        <div className="container-lg">
          <div className="d-flex justify-content-center">
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Title>TEST DE HOLLAND</Card.Title>
                <Card.Text>
                  <b>Instrucciones Generales </b>“Test de Intereses
                  Profesionales De Holland”.
                  <br />
                  1. Sólo debes ir leyendo atentamente las instrucciones y
                  responder según tu interés o proyección personal y
                  profesional.
                  <br />
                  2. Después de realizar el ejercicio, completa el cuadro
                  resumen
                </Card.Text>
                <Link to="/runtest/testinteligencia">
                  <Button variant="primary">Empezar Test</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else if (test === "testvocacional") {
    return (
      <div>
        <NavBar />
        <div className="container-lg">
          <div className="d-flex justify-content-center">
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Title>TEST VOCACIONAL</Card.Title>
                <Card.Text>
                  <b>Instrucciones Generales </b>“Test de Intereses
                  Profesionales De Gardent Holland”.
                  <br />
                  Este test te permitirá identificar los talentos que facilitan
                  tu aprendizaje.
                  <br /> A continuación aparecen unos criterios relacionados a
                  las 8 inteligencias múltiples de Howard Gardner.
                  <br /> No hay límite de tiempo para contestar el test. No te
                  ocupará más de 15 minutos. No hay respuestas correctas o
                  erróneas. <br />
                  Será útil en la medida que seas sincero/a en tus respuestas.{" "}
                  <br />
                  Indica hasta qué punto coincides con lo expresado Por favor
                  contesta a todos los items. El test es confidencial.
                  <br />
                </Card.Text>
                <Link to="/testvocacional">
                  <Button variant="primary">Empezar Test</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else if (test === "testpersonalidad") {
    return (
      <div>
        <NavBar />
        <div className="container-lg">
          <div className="d-flex justify-content-center">
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Title>Test Personalidad</Card.Title>
                <Card.Text>
                  <b>Instrucciones Generales</b>
                  <br />
                  Esta prueba tiene por objeto establecer los rasgos
                  fundamentalmente de sus fisonomías psicológicas, no investiga
                  efectos o faltas de la voluntad o de la conducta. Solo
                  determina su modo de ser natural. Su trabajo consiste en leer
                  atentamente la lista de rasgos de carácter que están a
                  continuación y luego marcar con una cruz aquellos rasgos que
                  usted posee. Conteste con absoluta sinceridad. Recuerde que no
                  hay respuestas buenas o malas, si no respuestas de distintos
                  tipos que van concentrando su estructura categórica.
                  <br />
                </Card.Text>
                <Link to="/testPersonalidad">
                  <Button variant="primary">Empezar Test</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Testinteligence;
