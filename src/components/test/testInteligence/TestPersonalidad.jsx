

    const [next, setNext] = useState(1);
    const [statetest, setStatetest] = useState(false);
    const [guardarTest, setGuardarTest] = useState(true);
    const [categorias, setCategorias] = useState([]);
    const [colerico, setColerico] = useState(0);
    const [apasionado, setApacionado] = useState(0);
    const [sanguineo, setSanguineo] = useState(0);
    const [flematico, setFlematico] = useState(0);
    const [nervioso, setNervioso] = useState(0);
    const [sentimental, setSentimental] = useState(0);
    const [amorfo, setAmorfo] = useState(0);
    const [apatico, setApatico] = useState(0);

    const dispatch = useDispatch()
    const [questions] = useSelector(state => state.listarPersonalidad.preguntas)

    useEffect(() => {

        dispatch(listarTestPersonalidad())

    },
        [])

    if (!questions) {
        return (
            <>
                <Navbar />

                <h3>esperando...</h3>
            </>)


    } else {

        const valoracion = (radioCheck) => {

            switch (questions[next - 1].category) {
                case 'Colerico':
                    setColerico(colerico + acomuladoresPersonalidad(radioCheck))
                    break;
                case 'Apasionado':
                    setApacionado(apasionado + acomuladoresPersonalidad(radioCheck))
                    break;
                case 'Sanguineo':
                    setSanguineo(sanguineo + acomuladoresPersonalidad(radioCheck))
                    break;
                case 'Flematico':
                    setFlematico(flematico + acomuladoresPersonalidad(radioCheck))
                    break;
                case 'Nervioso':
                    setNervioso(nervioso + acomuladoresPersonalidad(radioCheck))
                    break;
                case 'Sentimental':
                    setSentimental(sentimental + acomuladoresPersonalidad(radioCheck))
                    break;
                case 'Amorfo':
                    setAmorfo(amorfo + acomuladoresPersonalidad(radioCheck))
                    break;
                case 'Apatico':
                    setApatico(apatico + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'NerviosoSentimentalAmorfo':
                    setNervioso(nervioso + acomuladoresPersonalidad(radioCheck))
                    setSentimental(sentimental + acomuladoresPersonalidad(radioCheck))
                    setAmorfo(amorfo + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'SanguineoAmorfoFlematico':
                    setAmorfo(amorfo + acomuladoresPersonalidad(radioCheck))
                    setSanguineo(sanguineo + acomuladoresPersonalidad(radioCheck))
                    setFlematico(flematico + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'FlematicoApaticoSentimental':
                    setApatico(apatico + acomuladoresPersonalidad(radioCheck))
                    setFlematico(flematico + acomuladoresPersonalidad(radioCheck))
                    setSentimental(sentimental + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'ApasionadoFlematicoSentimental':
                    setFlematico(flematico + acomuladoresPersonalidad(radioCheck))
                    setApacionado(apasionado + acomuladoresPersonalidad(radioCheck))
                    setSentimental(sentimental + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'ColericoApasionadoNervioso':
                    setColerico(colerico + acomuladoresPersonalidad(radioCheck))
                    setNervioso(nervioso + acomuladoresPersonalidad(radioCheck))
                    setApacionado(apasionado + acomuladoresPersonalidad(radioCheck))
                    break;



                case 'ApasionadoSentimentalAmorfo':
                    setApacionado(apasionado + acomuladoresPersonalidad(radioCheck))
                    setAmorfo(amorfo + acomuladoresPersonalidad(radioCheck))
                    setSentimental(sentimental + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'ApaticoAmorfo':
                    setApatico(apatico + acomuladoresPersonalidad(radioCheck))
                    setAmorfo(amorfo + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'ColericoSanguineo':
                    setSanguineo(sanguineo + acomuladoresPersonalidad(radioCheck))
                    setColerico(colerico + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'ColericoNervioso':
                    setColerico(colerico + acomuladoresPersonalidad(radioCheck))
                    setNervioso(nervioso + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'NerviosoSentimental':
                    setSentimental(sentimental + acomuladoresPersonalidad(radioCheck))
                    setNervioso(nervioso + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'SentimentalFlematico':
                    setSentimental(sentimental + acomuladoresPersonalidad(radioCheck))
                    setFlematico(flematico + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'ApaticoSentimental':
                    setSentimental(sentimental + acomuladoresPersonalidad(radioCheck))
                    setApatico(apatico + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'ColericoApasionado':
                    setColerico(colerico + acomuladoresPersonalidad(radioCheck))
                    setApacionado(apasionado + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'FlematicoApatico':
                    setFlematico(flematico + acomuladoresPersonalidad(radioCheck))
                    setApatico(apatico + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'SentimentalFlematico ':
                    setFlematico(flematico + acomuladoresPersonalidad(radioCheck))
                    setSentimental(sentimental + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'ApaticoFlematico':
                    setFlematico(flematico + acomuladoresPersonalidad(radioCheck))
                    setApatico(apatico + acomuladoresPersonalidad(radioCheck))
                    break;

                case 'FlematicoApatico':
                    setFlematico(flematico + acomuladoresPersonalidad(radioCheck))
                    setApatico(apatico + acomuladoresPersonalidad(radioCheck))
                    break;




                default:
                    break;
            }

        }
        const handleFinalizar = () => {
            setCategorias([colerico, apasionado, sanguineo, flematico, nervioso, sentimental, amorfo, apatico])
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
                                    <h4 className="text-center mb-2">Test de Personalidad</h4>
                                    <h6 className="text mb-5">Marca SI o NO de acuedo a su Interes</h6>
                                    <div className="col-2 text-center bg-primary m-auto rounded w-25">
                                        <p className="text-center text-white">Pregunta</p>
                                        <h1 className="text-light">{`${next} / ${questions.length}`}</h1>
                                    </div>
                                    <div className="col-8 ">
                                        <p>{questions[next - 1].question}</p>
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
                                                    <div id="radioGroup"></div>
                                                    <div role="group" aria-labelledby="my-radio-group">
                                                        <label>
                                                            <Field type="radio" name="radiocheck" value="0" className="mx-2" />
                                                            SI
                                                        </label>

                                                        <label >
                                                            <Field type="radio" name="radiocheck" value="1" className="mx-2" />
                                                            NO
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
                                                            <Link to="/resultadosPersonalidad">
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
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

export default TestPersonalidad;
