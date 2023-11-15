import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styles/Components/curso-inscrito.css";
import img99 from "../Assets/soccer.png";
import axios from "axios";

export default function CursoInscrito() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [usrClases, setUsrClases] = useState([]);

  useEffect(() => {
    const getUsrClases = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4001/api/usuario/cursos/" + usuario._id
        );
        setUsrClases(data);
      } catch (error) {
        console.error("Error al obtener las clases", error);
      }
    };

    getUsrClases();
  }, []);

  return (
    <div className="widther">
      {usrClases.length < 1 ? (
        <center>
          <br />
          <br />
          <br />
          <br />
          <br />

          <center>
            <img src={img99} alt="asdasd" />
          </center>
          <br />
          <br />

          <p className="no--hay--cursos">
            No tienes cursos inscritos por el momento.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </center>
      ) : (
        usrClases.map((s) => (
          <div className="curso--noinscrito--container" key={s._id}>
            <Link to={`/detalle/${s._id}`} className="decorator">
              <div className="txt--noinscrito">
                <p className="titulo--card--noinscrito">{s.nombre}</p>
                <p>{s.profesor}</p>
                <span>
                  Aula: {s.aula} - {s.dia} {s.horario}
                </span>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
