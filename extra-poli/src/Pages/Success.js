import React from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../Assets/success.png";
import "../Styles/vars.css";

export default function Success() {
  const{id} = useParams();
  return (
    <div>
      <center>
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />

        <h1>¡Ya estas inscrito!</h1>
        <h2>Nos vemos en el salón de clases</h2>
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
        <Link to={`/detalle/${id}`} className="button-primary">Ver detalles de la clase</Link>
      </center>
      <br />
      <br />
      <br />
      <br />

      <center>
        <Link to={'/home'} className="button-secondary">Volver al inicio</Link>
      </center>
    </div>
  );
}
