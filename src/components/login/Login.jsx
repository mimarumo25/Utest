import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmailPassword, loginGoogle } from "../../actions/loginAction";
import { useForm } from "../../hooks/useForm";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";
import {Formik} from 'formik'

const Login = () => {
  const [envioformulario, setenvioformulario] = useState(false)
  const redirectRegister = useNavigate();
  const dispatch = useDispatch()



  const handleLoginGoogle = () => {
      dispatch(loginGoogle())
  }

  return (
    <>
    <NavBar />
    <Formik
    initialValues={{
        email: '',
    password: ''
    }}

    // validate={(valores)=>{
    //     let errores ={}
    //     //Validación Email
    //     if(!valores.email){
    //         errores.email = 'Por favor ingresa un email'
    //     }        
    //     return errores;

        //Validación Password

        
    // }}

    onSubmit={(valores, {resetForm})=>{
      // setenvioformulario(true)
      dispatch(loginEmailPassword(valores.email,valores.password))
      resetForm()
        console.log(valores)
        console.log("formulario enviado")
    }}>
        {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
            <div className="home">
            <div className="itemsform">
              <Form className="formlogin"  onSubmit={handleSubmit}>
              <h1>LOGIN</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Ingresa tu email</Form.Label>
                  <Form.Control type="email" 
                  placeholder="Ingresa tu email" 
                  name="email"
                  value={values.email}
                  onChange={handleChange} 
                  onBlur={handleBlur}/>
                  
                  {touched.email && errors.email && <div className="error">{errors.email}</div>}
                  
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword"  >
                  <Form.Label>Ingresa tu contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <hr />
                <span>
                  ¿No tienes cuenta?{" "}
                  <a href="#" onClick={() => redirectRegister("/register")}>
                    {" "}
                    Registrate Aquí
                  </a>
                  <hr />
                </span>
    
                <Button variant="primary" type="submit">
                  Iniciar Sesión
                </Button>
    
                <span> o </span>
                
                <Button variant="warning" type="submit" onClick={()=> handleLoginGoogle()} >
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google button"
                    
                  />
                </Button>
                {/* {envioformulario && <p>Formulario enviado con éxito!</p>} */}
              </Form>
              
            </div>
          </div>
        )}
    
      
      

    </Formik>
    <hr />
    <Footer />
      
    </>
  );
};

export default Login;
