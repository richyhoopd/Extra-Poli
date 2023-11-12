import React from 'react';
import Nav from '../Components/Nav';
import Searchbar from '../Components/Searchbar';
import CursoNoInscrito from '../Components/CursoNoInscrito';
import '../Styles/listado-cursos.css';
import CrearExtra from '../Components/CrearExtra';


export default function ListadoCursos() {
  return (
    <div className='listado--cursos-container'>
        <Nav/>
        <h1>Listado de Extracurriculares</h1>
        <Searchbar/>
        <CrearExtra/>
        <br/>
        <br/>

        <CursoNoInscrito/>

    </div>
  )
}
