
import { useEffect, useState } from "react"
import { Button, Card, FormGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Input, Label } from "reactstrap"
import { listarPreguntas } from "../../../actions/listarAction"
import Footer from '../../footer/Footer.jsx'
import { Categoria } from "../../../actions/categoriaAction"
import { acomuladores } from "../../helpers/acomuladores"
import Navbar from '../../navbar/Navbar.jsx'
import { Field, Form, Formik } from "formik"




const Runtest = () => {

    const { test } = useParams()

    const [next, setNext] = useState(1);
    const [statetest, setStatetest] = useState(false);
    const [guardarTest, setGuardarTest] = useState(true);
    //const [radioCheck, setRadioCheck] = useState();
    const [categorias, setCategorias] = useState([]);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [e, setE] = useState(0);
    const [f, setF] = useState(0);
    const [g, setG] = useState(0);

    const dispatch = useDispatch()
    const [questions] = useSelector(state => state.listar.preguntas)

    useEffect(() => {
        dispatch(listarPreguntas())
    }, [dispatch])

    if (!questions) {
        return (
            <>
                <Navbar />
                <h3>esperando...</h3>
            </>
        )
    } else {

        const valoracion = (radioCheck) => {

            switch (questions[next - 1].category) {
                case 'a':
                    setA(a + acomuladores(radioCheck))
                    break;
                case 'b':
                    setB(b + acomuladores(radioCheck))
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
            setCategorias([a, b, c, d, e, f, g])
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
                                    <h4 className="text-center mb-2">Test de Inteligencia</h4>
                                    <h6 className="text mb-5">Marca de 0 a 3 de acuerdo a su Interes, donde 0 es de menor interes y 3 de mayor interes</h6>
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
                                                    errores.radiocheck = "Para continuar selecciona una opción";
                                                }
                                                return errores;
                                            }}
                                            onSubmit={(value) => {
                                                if (next <= questions.length) {
                                                    valoracion(value.radiocheck);
                                                    if (next === questions.length) {
                                                        setStatetest(true);
                                                    } else {

                                                        value.radiocheck = ""
                                                        setNext(next + 1);
                                                    }
                                                }
                                            }}
                                        >
                                            {({ values, errors, touched, handleSubmit }) => (
                                                <Form onSubmit={handleSubmit}>
                                                    <div id="radioGroup"></div>
                                                    <div role="group" aria-labelledby="my-radio-group">
                                                        <label>
                                                            <Field type="radio" name="radiocheck" value="0" className="mx-2" />
                                                            Cero
                                                        </label>

                                                        <label>
                                                            <Field type="radio" name="radiocheck" value="1" className="mx-2"/>
                                                            Uno
                                                        </label>


                                                        <label>
                                                            <Field type="radio" name="radiocheck" value="2" className="mx-2"/>
                                                            Dos
                                                        </label>

                                                        <label>
                                                            <Field type="radio" name="radiocheck" value="3" className="mx-2"/>
                                                            Tres
                                                        </label>


                                                    </div>

                                                    {touched.radiocheck && errors.radiocheck && (
                                                        <div className="text-danger" >{errors.radiocheck}</div>
                                                    )}

                                                    {guardarTest ? (
                                                        !statetest ? (
                                                            <div className="d-flex justify-content-end">
                                                                <Button
                                                                    variant="primary"
                                                                    type="submit"

                                                                >
                                                                    Siguente
                                                                </Button>
                                                            </div>
                                                        ) : (
                                                            <div className="d-flex justify-content-end">
                                                                <Button variant="primary" onClick={handleFinalizar}>
                                                                    Finalizar
                                                                </Button>
                                                            </div>
                                                        )
                                                    ) : (
                                                        <div className="d-flex justify-content-end">
                                                            <Link to="/resultTest">
                                                                <Button variant="primary" onClick={handleVerResult}>
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
