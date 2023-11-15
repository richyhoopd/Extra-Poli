import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import "../Styles/detalle.css";
import { Link, useParams } from "react-router-dom";
import AdminManagementButtons from "../Components/AdminManagementButtons";
import axios from "axios";
import Agregar from "../Components/Agregar";

export default function Detalle() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const { id } = useParams();
  const [clase, setClase] = useState({});
  // const navigate = useNavigate();

  useEffect(() => {
    const getClase = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4001/api/clase/${id}`);
        setClase(data);
      } catch (error) {
        console.error('Error al obtener la clase', error.message);
      }
    };

    getClase();
  }, [id]);



  return (
    <div className="centrador">
      <Nav />
      <div className="red--banner">
        <div className="para--margen">
          <h2 className="h2--cagada">{clase.nombre}</h2>
          <p className="nombre--maestro">{clase.profesor}</p>
          <span>Aula: {clase.aula}</span>
          <span> - </span>
          <span>{clase.dia}</span>
          <span> </span>
          <span>{clase.horario}</span>
        </div>
      </div>
      <div className="description">
        <h2 className="description--title">Descripción</h2>
        <p>{clase.desc}</p>
      </div>
      <div className="description">
        <h2 className="description--title">Plan de clase</h2>
        <p>{clase.plan}</p>
      </div>
      <div className="description">
        <h2 className="description--title">Qué aprenderás al final</h2>
        <p>{clase.egreso}</p>
      </div>
      <br />
      {usuario && usuario.isAdmin ? (
        <AdminManagementButtons />
      ) : (
        <Agregar/>
      )}

      <Link className="button-secondary" to={"/home"}>
        Salir
      </Link>
    </div>
  );
}
