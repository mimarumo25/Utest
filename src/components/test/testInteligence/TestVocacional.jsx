import { useEffect, useState } from "react"
import { Button, Card, FormGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Input, Label } from "reactstrap"
import Footer from '../../footer/Footer.jsx'
import { Categoria } from "../../../actions/categoriaAction"
import {acomuladoresVocacional } from "../../helpers/acomuladores"
import Navbar from '../../navbar/Navbar.jsx'
import { listarPreguntasTestVocacional } from "../../../actions/listarTesVAction"
import { Field, Form, Formik } from "formik"

const TestVocacional = () => {
  const [next, setNext] = useState(1);
  const [statetest, setStatetest] = useState(false);
  const [guardarTest, setGuardarTest] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);

  const dispatch = useDispatch();
  const [questions] = useSelector((state) => state.listarVocacional.preguntas);

  useEffect(() => {
    dispatch(listarPreguntasTestVocacional());
  }, [dispatch]);

    useEffect(() => {
        dispatch(listarPreguntasTestVocacional())
    },
    [dispatch])

    if (!questions) {
        return (
            <>
                <Navbar />
                <h3>esperando...</h3>
            </>)

    } else {

        const valoracion = (radioCheck) => {            
            switch (questions[next - 1].category) {
                case 'a':
                    setA(a + acomuladoresVocacional(radioCheck))
                    break;
                case 'b':
                    setB(b + acomuladoresVocacional(radioCheck))
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
            setCategorias([a, b, c, d, e])
            setGuardarTest(false)
        }
        const handleVerResult = () => {
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
                                <h4 className="text-center mb-2">Test Vocacional</h4>
                                <h6 className="text mb-5">Marca <b>Me Interesa</b> o <b>No Me Interesa</b> de acuerdo a su Interes</h6>
                                <div className="col-2 text-center bg-primary m-auto rounded w-25">
                                <p className="text-center text-white">Pregunta</p>
                                    <h1 className="text-light">{`${next} / ${questions.length}`}</h1>
                                </div>
                                <div className="col-8 ">
                                    <p>{questions[next - 1].questions}</p>
                                    <Formik
                      initialValues={{
                        radiocheck: "",
                      }}
                      validate={(valores) => {
                        let errores = {};

                        if (!valores.radiocheck) {
                          errores.radiocheck = "Por selecciona una opción";
                        }
                        return errores;
                      }}
                      onSubmit={(value) => {
                        if (next <= questions.length) {
                          valoracion(value.radiocheck);
                          if (next === questions.length) {
                            setStatetest(true);
                          } else {
                            value.radiocheck = "";
                            setNext(next + 1);
                          }
                        }
                      }}
                    >
                      {({ values, errors, touched, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                          
                          <div role="group" aria-labelledby="my-radio-group">
                            <label>
                              <Field type="radio" name="radiocheck" value="0" className="mx-2 fs-5 text"/>
                              Me Interesa
                            </label>

                            <label>
                              <Field type="radio" name="radiocheck" value="1" className="mx-2 fs-5 text"/>
                              NO Interesa
                            </label>
                          </div>

                          {touched.radiocheck && errors.radiocheck && (
                            <div className="text-danger">
                              {errors.radiocheck}
                            </div>
                          )}

                          {guardarTest ? (
                            !statetest ? (
                              <div className="d-flex justify-content-end">
                                <Button variant="primary" type="submit">
                                  Siguente
                                </Button>
                              </div>
                            ) : (
                              <div className="d-flex justify-content-end">
                                <Button
                                  variant="primary"
                                  onClick={handleFinalizar}
                                >
                                  Finalizar
                                </Button>
                              </div>
                            )
                          ) : (
                            <div className="d-flex justify-content-end">
                              <Link to="/resultadosVocacional">
                                <Button
                                  variant="primary"
                                  onClick={handleVerResult}
                                >
                                  Ver Resultados
                                </Button>
                              </Link>
                            </div>
                          )}
                        </Form>
                      )}
                    </Formik>
                                </div>
                            </div>
                    
                            <div className="d-flex justify-content-end">
                              <Link to="/resultadosVocacional">
                                <Button
                                  variant="primary"
                                  onClick={handleVerResult}
                                >
                                  Ver Resultados
                                </Button>
                              </Link>
                            </div>
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
