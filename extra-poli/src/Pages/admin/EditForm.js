import React, { useEffect, useState } from 'react';
import '../../Styles/Components/admin/crear-form.css';
import Nav from '../../Components/Nav'
import { Link, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios";

export default function EditForm() {
  const { id } = useParams();  // Asegúrate de obtener el id de los parámetros de la URL
  const [curso, setCurso] = useState({
    nombre: '',
    profesor: '',
    aula: '',
    horario: '',
    dia: '',
    desc: '',
    plan: '',
    egreso: ''
  });

  useEffect(() => {
    const getCurso = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4001/api/clase/${id}`);
        setCurso(data);
      } catch (error) {
        console.error('Error al obtener la información del curso', error.message);
      }
    };

    getCurso();
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('namecurso').value;
    const prof = document.getElementById('profesor').value;
    const aula = document.getElementById('aula').value;
    const horario = document.getElementById('horario').value;
    const dia = document.getElementById('dia').value;
    const desc = document.getElementById('desc').value;
    const plan = document.getElementById('plan').value;
    const egreso = document.getElementById('egreso').value;

    try {
      await axios.put(`http://localhost:4001/api/clase/${id}`, {
        nombre: nombre,
        profesor: prof,
        aula: aula,
        horario: horario,
        dia: dia,
        desc: desc,
        plan: plan,
        egreso: egreso
      });

      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Curso actualizado correctamente',
      });

      window.location.href = '/actualizado/success';
    } catch (error) {
      console.error('Error al actualizar el curso', error.message);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al actualizar el curso',
      });
    }
  }

  return (
    <div className='crear--form--container'>
      <Nav />
      <h1>Editar curso</h1>
      <form onSubmit={submit}>
        <input
          id="namecurso"
          className="input--crear--curso"
          type="text"
          placeholder={`Nombre anterior: ${curso.nombre}`}
          defaultValue={curso.nombre}
          required
        />
        
        <input
          id="profesor"
          className="input--crear--curso"
          type="text"
          placeholder={`Profesor anterior: ${curso.profesor}`}
          defaultValue={curso.profesor}
          required
        />
        <input
          id="aula"
          className="input--crear--curso"
          type="text"
          placeholder={`${curso.aula}`}
          defaultValue={curso.aula}

          required
        />
        <input
          id="horario"
          className="input--crear--curso"
          type="text"
          placeholder={`${curso.horario}`}
          defaultValue={curso.horario}

          required
        />
        <input
          id="dia"
          className="input--crear--curso"
          type="day"
          placeholder={`${curso.dia}`}
          defaultValue={curso.dia}

          required
        />
        <textarea
          id="desc"
          className="input--crear--curso"
          type="textarea"
          placeholder={`${curso.desc}`}
          defaultValue={curso.desc}

          required
        />
        <textarea
          id="plan"
          className="input--crear--curso"
          type="textarea"
          placeholder={`${curso.plan}`}
          defaultValue={curso.plan}

          required
        />
        <textarea
          id="egreso"
          className="input--crear--curso"
          type="textarea"
          placeholder={`${curso.egreso}`}
          defaultValue={curso.egreso}

          required
        />
        <input id="button--submit--curso" className="button--submit" type="submit" value="Actualizar curso" />
      </form>
      <Link className="button-secondary" to={'/home'}>Volver a inicio</Link>
      <br />
      <br />
      <br />
    </div>
  );
}
