import React from 'react';
import home from '../img/home.png'

const Home = () => {
    return (
        <div className='home'>
            <div className="d-flex">
                
            <img className='img-home' src={home} alt="home" />
            <h1 className="mt-2">Conocer oportunidades de tu futuro</h1>
            </div>
            <p className="mb-4">Este es un Inventario de Intereses Vocacionales y Ocupacionales, en el que usted encontrará un conjunto de pares de preguntas, permitiéndole obtener su perfil de preferencias profesionales y ocupacionales. Para ello sólo tiene que elegir entre dos alternativas; y, en el formulario de respuestas marcarás la letra “a”, la “b”, ambas “a y b” si su respuesta incluye las dos alternativas o N.A. (ninguna de las anteriores), según sea su preferencia.</p>
            <button className='btn btn-primary comenzar1' href="#login"> Comenzar</button>
        </div>
        
    )
}

export default Home;
