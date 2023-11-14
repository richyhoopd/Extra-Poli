import React from 'react';
import user from '../Assets/user.png';
import Nav from '../Components/Nav';
import { Navigate, Link } from 'react-router-dom';
import Logout from './Logout';

export default function UserProfile() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        Navigate('/');
    }
  return (
    <div>
        <Nav/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <center>
            <img src={user} alt='usuario' />
        </center>
        <br/>
        <br/>

        
    <center><h1>{usuario.nombre}</h1></center>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

<center>
<Link id="button-bottom-agenda" to="/logout" >
          Cerrar Sesion
        </Link>
</center>
    </div>
  )
}
