import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../components/about/About'
import Login from '../components/login/Login'
import NavBar from '../components/navbar/Navbar'
import Register from '../components/register/Register'
import Principal from '../containers/Principal'

const AppRouter = () => {
    return (
        
            <Router>
                
                
                <Routes>

                
                <Route exact path="/"  element={<Principal/>}/>                
                <Route exact path="/about"  element={<About/>}/>
                <Route exact path="/login"  element={<Login/>}/>
                <Route exact path="/register"  element={<Register/>}/>
                </Routes>  
            

            </Router>
            
        
    )
}

export default AppRouter
