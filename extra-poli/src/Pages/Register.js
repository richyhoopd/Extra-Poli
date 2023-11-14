import React from 'react'
import Nav from '../Components/Nav';
import '../Styles/registro.css';

import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {

    const submit = async(e)=>{
        e.preventDefault();
    
        const nombre = document.getElementById('Name').value;
        const siiau = document.getElementById('Siiau').value;
        const correo = document.getElementById('Correo').value;
        const passwrd = document.getElementById('Passwd').value;
    
        const {data} = await axios.post('http://localhost:4001/api/usuario/',
        {
          nombre: nombre,
          siiau: siiau, 
          correo: correo,
          password: passwrd
        })
    
        if(data._id !== undefined){
          window.location.href = '/login';
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Correo ya registrado con una cuenta, inetente nuevamente',
          })
        }
    
      }
      
  return (
    <div>
    <Nav />
    <form className='login-form-container'  onSubmit={submit}>
    
        <h1>Registro</h1>
        <h2>Crea una cuenta para comenzar a inscribirte a los extras</h2>


        <input 
            id="Name"
            className="input--style"
            placeholder="Ingresa tu nombre..." 
            required
        /> 

        

        <input 
            id="Siiau"
            className="input--style"
            placeholder="Ingresa tu codigo de siiau..." 
            required
        />

        <input 
            id="Correo"
            className="input--style"
            placeholder="Ingresa tu correo electronico..." 
            type='email'
            required
        />  

        <input 
            id="Passwd"
            className="input--style"
            placeholder="Ingresa tu contraseña extrapoli..." 
            required
        /> 
        <input id="button--submit" className="button-submit" type="submit" value="Crear Cuenta" />
    </form>
    <br/>
    <br/>
    <br/>

    <center>
        
        <Link className="button-secondary" to={"/login"}>
              Iniciar Sesión
            </Link>
        </center>
</div>
  )
}
