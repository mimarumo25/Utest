import React, { useEffect } from 'react';
import { Card, Button, Form, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listarPreguntas } from '../../../actions/listarAction';
import Footer from '../../footer/Footer';
import NavBar from '../../navbar/Navbar';


const Runtest = () => {

    const dispatch = useDispatch()
    const [datos] = useSelector(state => state.listar.preguntas)
    console.log(datos)

   useEffect(() => {
    dispatch(listarPreguntas())
   }, [])

   if(!datos){
       return  <h3>esperando...</h3>      
       
   }else{

   

    return (
        <div>
            <NavBar />
            <div className="container-lg">
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '50rem' }}>
                        <Card.Body>

                            <div className="row d-flex justify-content-center">
                                <div className="col-2 text-center bg-primary m-auto rounded">
                                    <h1>5</h1>
                                </div>
                                <Card.Text className="col-8 ">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore illum facilis corporis aliquam, ex aliquid rerum necessitatibus distinctio tenetur at, corrupti inventore impedit sunt autem iusto debitis? Doloribus, sequi accusantium.</p>
                                    <div className="d-flex justify-content-center ">
                                        <div className="mx-3">
                                            <fieldset>
                                                <Form.Group className="mb-3">
                                                    <Col sm={10}>
                                                        <Form.Check
                                                            type="radio"
                                                            label="first radio"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios1"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="second radio"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios2"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="third radio"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios3"
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </fieldset>
                                        </div>                                        
                                    </div>
                                </Card.Text>

                            </div>

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
}
export default Runtest;
