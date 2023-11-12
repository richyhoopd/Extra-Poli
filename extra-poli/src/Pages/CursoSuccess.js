import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Assets/success.png";
import "../Styles/vars.css";

export default function CursoSuccess() {
  return (
    <div>
      <center>
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />

        <h1>¡Curso creado con exito!</h1>
        <h2>todo listo, hemos creado tu curso extracurricular</h2>
      </center>
      <br />
      <br />

      <br />
      <br />

      <br />
      <br />

      <center>
        <img src={img1} alt="exito inscribiendote" />
      </center>
      <br />
      <br />

      <br />
      <br />

      <br />
      <br />
      <center>
        <Link to={'/extras'} className="button-primary">Ir a los cursos</Link>
      </center>
      <br />
      <br />
      <br />
      <br />

      <center>
        <Link to={'/admin/home'} className="button-secondary">volver a inicio</Link>
      </center>
    </div>
  );
}
