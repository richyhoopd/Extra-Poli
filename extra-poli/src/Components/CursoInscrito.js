import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/Components/curso-inscrito.css";
import img99 from '../Assets/soccer.png'

export default function CursoInscrito() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  
  return (
    <div>
      {usuario ? (
          <Link key={usuario._id} to={`/detalle/${usuario._id}`} className="curso--inscrito">
            <div className="txt">
              <p className="titulo--card">{usuario.nombre}</p>
              <p>{usuario.desc}</p>
              <span>Aula: {usuario.aula} - {usuario.dia} {usuario.horario}</span>
            </div>
          </Link>
        ) : (
        <center>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <center><img src={img99} alt="asdasd"/></center>
          <br/>
          <br/>

        <p className="no--hay--cursos">No tienes cursos inscritos por el momento.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
     

        </center>
      )}
    </div>
  );
}
