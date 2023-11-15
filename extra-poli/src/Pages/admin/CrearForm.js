import React from 'react';
import '../../Styles/Components/admin/crear-form.css';
import Nav from '../../Components/Nav'
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios";


export default function CrearForm() {
  const submit = async(e)=>{
    e.preventDefault();

    const nombre = document.getElementById('namecurso').value;
    const prof = document.getElementById('profesor').value;
    const aula = document.getElementById('aula').value;
    const horario = document.getElementById('horario').value;
    const dia = document.getElementById('dia').value;
    const desc = document.getElementById('desc').value;
    const plan = document.getElementById('plan').value;
    const egreso = document.getElementById('egreso').value;



    const {data} = await axios.post('http://localhost:4001/api/clase/',
    {
      nombre: nombre,
      profesor: prof, 
      aula: aula,
      horario: horario,
      dia: dia,
      desc: desc,
      plan: plan,
      egreso: egreso

    })

    if(data._id !== undefined){
      window.location.href = '/curso/success';
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'clase ya existente',
      })
    }

  }
  return (
    <div className='crear--form--container' onSubmit={submit}>
      <Nav/>
        <h1>Crear nuevo curso</h1>
        <form>
        <input
          id="namecurso"
          className="input--crear--curso"
          type="text"
          placeholder="Ingresa el Nombre del Curso..."
          required
        />
        <input
          id="profesor"
          className="input--crear--curso"
          type="text"
          placeholder="nombre del profesor del curso..." 
          required
        />
        <input
          id="aula"
          className="input--crear--curso"
          type="text"
          placeholder="Ingresa aula del curso..."
          required
        />
        <input
          id="horario"
          className="input--crear--curso"
          type="text"
          placeholder="ingresa el horario..."
          required
        />
        <input
          id="dia"
          className="input--crear--curso"
          type="day"
          placeholder="ingresa el dia que sera impartido..."
          required
        />
        <textarea
          id="desc"
          className="input--crear--curso"
          type="textarea"
          placeholder="descripción del curso..."
          required
        />
        <textarea
          id="plan"
          className="input--crear--curso"
          type="textarea"
          placeholder="plan de clase..."
          required
        />
        <textarea
          id="egreso"
          className="input--crear--curso"
          type="textarea"
          placeholder="perfil de egreso del alumno..."
          required
        />
        <input id="button--submit--curso" className="button--submit" type="submit" value="Crear curso" />
        </form>
        <Link className="button-secondary" to={'/home'}>Volver a inicio</Link>
        <br/>
        <br/>

        <br/>


    </div>
  )
}
