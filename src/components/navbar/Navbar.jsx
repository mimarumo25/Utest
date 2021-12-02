import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../img/utestprov.png";
import login from "../../img/login.png";
import "../../styles/slyle-home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const NavBar = () => {

  const redirecthome = useNavigate()
  const redirectabout = useNavigate()
  const redirectlogin = useNavigate()
  const redirectregister = useNavigate()


  return (
    <div>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" class="img-fluid" onClick={() => redirecthome("/")}/>{" "}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <button className="btn btn-primary " href="#login" onClick={() => redirectabout("/about")}>
               Acerca de
              </button>{" "}
              <button className="btn btn-primary" href="#login" onClick={() => redirectregister("/register")}>
                Registro
              </button>{" "}
              <button className="btn btn-primary" href="#login" onClick={() => redirectlogin("/login")}>
                Iniciar sesión
              </button>{" "}
              <img src={login} alt="login" class="login" />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
