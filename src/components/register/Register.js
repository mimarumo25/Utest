import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerEmailPassword } from "../../actions/registerAction";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <NavBar />

      <Formik
        initialValues={{
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          if (valores.password1 === valores.password2) {
            dispatch(
              registerEmailPassword(
                valores.email,
                valores.password1,
              )
            );
          } else {
            console.log("las contraseñas no son iguales");
          }

          resetForm();
          console.log(valores);
          console.log("formulario enviado");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <div className="home">
            <div className="itemsform">
                
              <Form className="formlogin" onSubmit={handleSubmit}>
              <h1>REGISTRO</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Ingresa tu email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa un email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {touched.email && errors.email && (
                    <div className="error">{errors.email}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Ingresa una contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa una contraseña"
                    name="password1"
                    value={values.password1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Ingresa una contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa una contraseña"
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <hr />

                <Button variant="primary" type="submit">
                  Registrarse
                </Button>

                <hr />
                <span>
                  ¿Ya tienes una cuenta? <Link to="/login"> Inicia sesión</Link>
                </span>
              </Form>
            </div>
          </div>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default Register;
