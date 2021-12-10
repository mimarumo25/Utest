import React from 'react'
import NavBar from '../navbar/Navbar'
import Footer from '../footer/Footer.jsx';
import { useSelector } from 'react-redux';

export default function Resultados() {
    const {categorias} = useSelector(store => store.categoria)
   
   

     
    return (
   
        <div>
             <NavBar />
            <div className="container">


            </div>
            <Footer />
        </div>
    )
}
