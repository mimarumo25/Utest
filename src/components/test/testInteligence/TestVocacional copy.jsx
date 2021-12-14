import { useEffect, useState } from "react"
import { Button, Card, FormGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Input, Label } from "reactstrap"
import Footer from '../../footer/Footer.jsx'
import { Categoria } from "../../../actions/categoriaAction"
import { acomuladores, acomuladoresVocacional } from "../../helpers/acomuladores"
import Navbar from '../../navbar/Navbar.jsx'
import { listarPreguntasTestVocacional } from "../../../actions/listarTesVAction"

const TestVocacional = () => {

    
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
 

    const dispatch = useDispatch()
    const [questions] = useSelector(state => state.listar.preguntas)

   useEffect(() => {
    dispatch(listarPreguntasTestVocacional())    
   }, 
   [dispatch])

   if(!questions){
       return  <h3>esperando...</h3>      
       
   }else{
     
    
  
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
                setA(a + acomuladoresVocacional(radioCheck))
                break;
            case 'b':
                 setB( b + acomuladoresVocacional(radioCheck))
                break;
            case 'c':
                setC(c + acomuladoresVocacional(radioCheck))
                break;
            case 'd':
                setD(d + acomuladoresVocacional(radioCheck))
                break;
            case 'e':
                setE(e + acomuladoresVocacional(radioCheck))
                break;
            default:
                break;
        }


    }
    const handleFinalizar = () => {
        setCategorias([a,b,c,d,e ])
        setGuardarTest(false)        
    }
   const handleVerResult = () =>{
   dispatch(Categoria(categorias))
    }
    return (
        <div>
            <Navbar />
            <div className="container-lg">
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '50rem' }} className="Cards rounded">
                        <Card.Body>
                            <div className="row d-flex justify-content-center">
                                <div className="col-2 text-center bg-primary m-auto rounded w-25">
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
                                                Me interesa
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
                                                No me interesa
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
                                :(<div className="d-flex justify-content-end">
                                    <Link to="/resultTest">
                                    <Button variant="primary" onClick={handleVerResult}>Ver Resultados</Button>
                                    </Link> 
                                    </div>
                                )
                                }  
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
}
}
export default TestVocacional;
