import React from 'react';
import user from '../Assets/user.png';
import Nav from '../Components/Nav';
import { Navigate, Link } from 'react-router-dom';
import '../Styles/user-profile.css';
import Swal from 'sweetalert2';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

export default function UserProfile() {
     const usuario = JSON.parse(localStorage.getItem("usuario"));
    // const { id } = usuario._id;  // Asegúrate de obtener el id de los parámetros de la URL
    // const [usr, setUsr] = useState({
    //   nombre: '',
    //   siiau: '',
    //   correo: '',
    //   password: ''
    // });
  
    // useEffect(() => {
    //   const getUsr = async () => {
    //     try {
    //       const { data } = await axios.get(`http://localhost:4001/api/usuario/${id}`);
    //       setUsr(data);
    //     } catch (error) {
    //       console.error('Error al obtener la información del usuario', error.message);
    //     }
    //   };
  
    //   getUsr();
    // }, [id]);
  
    // const submit = async (e) => {
    //   e.preventDefault();
  
    //   const nombre = document.getElementById('Name').value;
    //     const siiau = document.getElementById('Siiau').value;
    //     const correo = document.getElementById('Correo').value;
    //     const passwrd = document.getElementById('Passwd').value;
  
    //   try {
    //     await axios.put(`http://localhost:4001/api/usuario/${id}`, {
    //       nombre: nombre,
    //       siiau: siiau, 
    //       correo: correo,
    //       password: passwrd
    //     });
  
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Éxito',
    //       text: 'Usuario actualizado correctamente',
    //     });
  
    //     window.location.href = '/actualizado/success';
    //   } catch (error) {
    //     console.error('Error al actualizar al usuario', error.message);
  
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: 'Error al actualizar el usuario',
    //     });
    //   }
    // }

     if (!usuario) {
         Navigate('/');
     }

     function actualizarMomento () {
      Swal.fire({
               icon: 'success',
               title: 'Éxito',
               text: 'Usuario actualizado correctamente',
             });
     }
  return (
    <div>
        <Nav/>
        <div className='information--badge'><p>Puedes editar tu información dando click en ella</p></div>
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

    <center>
      <form onSubmit={actualizarMomento}>
      <input 
            id="Name"
            className="input--style"
            placeholder="Ingresa tu nombre..." 
            defaultValue={usuario.nombre}
            required
        /> 

        

        <input 
            id="Siiau"
            className="input--style"
            placeholder="Ingresa tu codigo de siiau..." 
            defaultValue={usuario.siiau}

            required
        />

        <input 
            id="Correo"
            className="input--style"
            placeholder="Ingresa tu correo electronico..." 
            type='email'
            defaultValue={usuario.correo}
            required
        />  

        <input 
            id="Passwd"
            className="input--style"
            type='password'
            placeholder="Ingresa tu contraseña extrapoli..." 
            defaultValue={usuario.password}

            required
        /> 
        <input id="button--submit" className="button-submit" type="submit" value="Actualizar tu perfil" />
      </form>
    </center>
    
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
