import React from 'react';
import Nav from '../Components/Nav';
import '../Styles/login.css';

import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
    const submit = async(e)=>{
        e.preventDefault();
        const siiau = document.getElementById('Siiau').value;
        const passwd = document.getElementById('Passwd').value;
    
        const {data} = await axios.post('http://localhost:4001/api/usuario/iniciar/sesion', {
          siiau: siiau, 
          password: passwd
        });
    
        if(data._id === undefined){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Correo y/o contraseña incorrectos',
          })
        }else{
          localStorage.setItem('usuario', JSON.stringify(data));
          window.location.href = '/home';
        }
      }
  return (
    <div>
        <Nav />
        <form className='login-form-container' onSubmit={submit}>
        
            <h1>Iniciar sesión</h1>

            <input 
                id="Siiau"
                className="input--style"
                placeholder="Ingresa tu codigo de siiau..." 
                required
            />

            <input 
                id="Passwd"
                className="input--style"
                placeholder="Ingresa tu contraseña extrapoli..." 
                required
            /> 
            <input id="button--submit" className="button-submit" type="submit" value="Iniciar sesión" />
        </form>
    <br/>
    <br/>
    <br/>

        <center>
        <Link className="button-secondary" to={"/register"}>
              Crear cuenta
            </Link>
        </center>
    </div>
  )
}
