import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../footer/Footer';
import NavBar from '../../navbar/Navbar';

const Testinteligence = () => {

    

    return (
        <div>
            <NavBar />
            <div className="container-lg">
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '50rem' }}>
                        <Card.Body>
                            <Card.Title>TEST DE HOLLAND</Card.Title>
                            <Card.Text>
                                <b>Instrucciones Generales  </b>“Test de Intereses Profesionales De Holland”.<br />
                                1. Sólo debes ir leyendo atentamente las instrucciones y responder según tu interés o proyección personal y
                                profesional.<br />
                                2. Después de realizar el ejercicio, completa el cuadro resumen
                            </Card.Text>
                            <Link to="/runtest">
                                <Button variant="primary" >Empezar Test</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default Testinteligence;
