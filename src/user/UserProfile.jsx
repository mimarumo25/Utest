import { Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logout } from '../actions/loginAction';


export const UserProfile = ({ ...props }) => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = useSelector(store => store.login);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/")
    }
    return (
        <>

            <Icon icon="bx:bx-user-circle" height="50" onClick={handleShow} />

            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Perfil de Usuario</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="container">
                        <img src={user.image} alt="Avatar" />
                        <h4>{`Nombre: ${user.name}`}</h4>
                        <Button onClick={handleLogout}>Cerrar Sesion</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}



