import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import CursoInscrito from "../Components/CursoInscrito";
import "../Styles/home.css";
import { Link } from "react-router-dom";
import AdminPanelComponent from "../Components/admin/AdminPanelComponent";

export default function Home() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <div className="home--page--container">
      <Nav />

      {usuario && usuario.isAdmin ? (
        <h1>Hola Admin {usuario.nombre}</h1>
      ) : (
        <h1>Extracurriculares inscritos</h1>
      )}

      {usuario && usuario.isAdmin ? <AdminPanelComponent /> : <CursoInscrito />}

      <Link className="button-secondary" to={"/extras"}>
        Explorar más Extracurriculares
      </Link>
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      
     


      <center>
        <Link id="button-bottom-agenda" to="/logout" >
          Cerrar Sesion
        </Link>
      </center>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  );
}
