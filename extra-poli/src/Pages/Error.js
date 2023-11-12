import React from "react";
import { Link } from "react-router-dom";
import img2 from "../Assets/error.png";
import "../Styles/vars.css";

export default function Success() {
  return (
    <div>
      <center>
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />

        <h1>Hubo un error :(</h1>
        <h2>No pudimos procesar tu solicitud</h2>
      </center>
      <br />
      <br />

      <br />
      <br />

      <br />
      <br />

      <center>
        <img src={img2} alt="exito inscribiendote" />
      </center>
      <br />
      <br />

      <br />
      <br />

      <br />
      <br />
      <center>
        <Link to={'https://facebook.com'} className="button-primary">Contactar a soporte</Link>
      </center>
      <br />
      <br />
      <br />
      <br />

      <center>
        <Link to={'/home'} className="button-secondary">Volver a inicio</Link>
      </center>
    </div>
  );
}
