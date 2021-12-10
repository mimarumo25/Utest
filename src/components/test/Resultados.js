import React from 'react'
import NavBar from '../navbar/Navbar'
import Footer from '../footer/Footer.jsx';
import { useSelector } from 'react-redux';

export default function Resultados() {
    const {categorias} = useSelector(store => store.categoria)
   
    data={
        labels:[ 'Int. Verbal','Int. Lógico-matemática','Int. Visual espacial','Int. kinestesica-corporal','Int. Musical-rítmica','Int. Intrapersonal','Int Interpersonal'],
        datasets:[{
            label:'Nivel de Inteligencía Por Categoría',
            background:'rgba(0,255,0,1)',
            borderColor:'black',
            boarderWhidth:1,
            hoverBackgroundColor:'rgba(0,255,0,0.2)',
            hoverBorderColor:'black',
            data:categorias
        }]
    };

    const opciones={
        main
    } 

     
    return (
   
        <div>
             <NavBar />
            <div className="container">


            </div>
            <Footer />
        </div>
    )
}
