import React from 'react';
import user from '../Assets/user.png';
import Nav from '../Components/Nav';
import { Navigate } from 'react-router-dom';

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
        <center>
            <img src={user} alt='usuario' />
        </center>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
<center>{usuario.nombre}</center>
    </div>
  )
}
