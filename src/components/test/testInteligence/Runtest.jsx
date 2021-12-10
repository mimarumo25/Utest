import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FormGroup, Label, Input } from "reactstrap";
import { Link } from 'react-router-dom';
import Footer from '../../footer/Footer';
import NavBar from '../../navbar/Navbar';
import { acomuladores } from '../../helpers/acomuladores'
import { useDispatch } from 'react-redux';
import {Categoria} from '../../../actions/categoriaAction'


const Runtest = () => {
    const questions = [

        {
            uid: 'BDMFF3jGvFmeELdYYudw',
            questions: 'Me mantengo "en contacto" con mis estados de ánimo. No me cuesta identificarlos.',
            category: 'a'
        },
        {
            uid: 'BLq0XNs8lyQnc7OhvPyS',
            questions: 'Me gusta construir modelos ( o hacer esculturas)',
            category: 'c'
        },
        {
            uid: 'EHsv9NgVukkp9h6HJFKq',
            questions: 'Me doy cuenta bastante bien de lo que otros piensan de mí.',
            category: 'b'
        },
        {
            uid: 'GULvw5Ym7Oo4MZKhH9fo',
            questions: 'Disfruto de una buena charla, discurso o sermón.',
            category: 'd'
        },
        {
            uid: 'BDMFF3jGvFmeELdYYudw',
            questions: 'Me mantengo "en contacto" con mis estados de ánimo. No me cuesta identificarlos.',
            category: 'e'
        }
    ];
    const dispatch = useDispatch()

    const [next, setNext] = useState(1);
    const [statetest, setStatetest] = useState(false);
    const [guardarTest, setGuardarTest] = useState(true);
    const [radioCheck, setRadioCheck] = useState();
    const [categorias, setCategorias] = useState([]);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [e, setE] = useState(0);
    const [f, setF] = useState(0);
    const [g, setG] = useState(0); 
    
  
    const handleChangeRadio = e => {
        setRadioCheck(e.target.value);
    }
    
    const handleSumar = () => {
        if (next <= questions.length) {
            valoracion();
            if (next === questions.length) {
                setStatetest(true)
                
            } else {
                setNext(next + 1)
                setRadioCheck();
                
            }
        }

    }
   
    const valoracion = () => {

        switch (questions[next - 1].category) {
            case 'a':
                setA(a + acomuladores(radioCheck))
                break;
            case 'b':
                 setB( b + acomuladores(radioCheck))
                break;
            case 'c':
                setC(c + acomuladores(radioCheck))
                break;
            case 'd':
                setD(d + acomuladores(radioCheck))
                break;
            case 'e':
                setE(e + acomuladores(radioCheck))
                break;
            case 'f':
                setF(f + acomuladores(radioCheck))
                break;
            case 'g':
                setG(g + acomuladores(radioCheck))
                break;

            default:
                break;
        }


    }
    const handleFinalizar = () => {
        setCategorias([a,b,c,d,e,f,g ])
        setGuardarTest(false)        
    }
   const handleVerResult = () =>{
   dispatch(Categoria(categorias))
    }
    return (
        <div>
            <NavBar />
            <div className="container-lg">
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '50rem' }} className="Cards rounded">
                        <Card.Body>
                            <div className="row d-flex justify-content-center">
                                <div className="col-2 text-center bg-primary m-auto rounded">
                                    <h1 className="text-light">{`${next} / ${questions.length}`}</h1>
                                </div>
                                <div className="col-8 ">
                                    <p>{questions[next - 1].questions}</p>
                                    <FormGroup className="formGroupRadios">
                                        <FormGroup>
                                            <Input
                                                id="radio0"
                                                type="radio"
                                                value={0}
                                                checked={radioCheck == 0 ? true : false}
                                                onChange={handleChangeRadio}
                                            />
                                            <Label for="radio0">
                                                Cero
                                            </Label>
                                        </FormGroup>

                                        <FormGroup>
                                            <Input
                                                id="radio1"
                                                type="radio"
                                                value={1}
                                                checked={radioCheck == 1 ? true : false}
                                                onChange={handleChangeRadio}
                                            />
                                            <Label for="radio1">
                                                Uno
                                            </Label>
                                        </FormGroup>

                                        <FormGroup>
                                            <Input
                                                id="radio2"
                                                type="radio"
                                                value={2}
                                                checked={radioCheck == 2 ? true : false}
                                                onChange={handleChangeRadio}
                                            />
                                            <Label for="radio2">
                                                Dos
                                            </Label>
                                        </FormGroup>

                                        <FormGroup>
                                            <Input
                                                id="radio3"
                                                type="radio"
                                                value={3}
                                                checked={radioCheck == 3 ? true : false}
                                                onChange={handleChangeRadio}
                                            />
                                            <Label for="radio3">
                                                Tres
                                            </Label>
                                        </FormGroup>

                                    </FormGroup>

                                </div>
                            </div>

                            {
                                guardarTest?
                                (!statetest ? 
                                (<div className="d-flex justify-content-end">
                                    <Button variant="primary" onClick={handleSumar}>Siguente</Button>
                                    </div>) : (
                                   <div className="d-flex justify-content-end">
                                    <Button variant="primary" onClick={handleFinalizar}>Finalizar</Button>
                                    </div>
                                    ))
                                :(
                                    <Link to="/resultTest">
                                    <Button variant="primary" onClick={handleVerResult}>Ver Resultados</Button>
                                    </Link> 
                                )
                                }  
                        </Card.Body>
                        <p>El radio button seleccionado es: <b>{a}</b></p>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Runtest;
