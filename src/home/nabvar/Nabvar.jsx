import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../img/UTEST (1).png'
import login from '../../img/login.png'
import './nabvar.css'



const Nabvar = () => {
    return (
      <div>
        <Navbar bg="primary">
          <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="logo"  class="img-fluid"/> </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
            <button className='btn btn-primary ' href="#login">Mark Otto</button>  <button className='btn btn-primary' href="#login">Mark Otto</button> <button className='btn btn-primary' href="#login">Mark Otto</button> <img src={login} alt="login" class="login"/>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default Nabvar
