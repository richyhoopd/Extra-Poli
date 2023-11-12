import React from "react";
import { Link } from "react-router-dom";
import "../Styles/vars.css";
import "../Styles/landing-page.css";
import Nav from "../Components/Nav";
import img1 from "../Assets/landing-main-image.png";
import img2 from "../Assets/landing-second-img.png";
import img3 from "../Assets/landing-third-img.png";
import img4 from "../Assets/landing-fourth-img.png";

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <section className="top-main-section">
        <h1>¡Haz mas cosas en la escuela!</h1>
        <h2>Crea una cuenta o inicia sesión para agendar extracurriculares.</h2>
        <center>
          <img alt="imagen principal" src={img1} />
        </center>
        <div className="buttons-container">
          <Link className="button-primary" to={"/login"}>
            Iniciar sesión
          </Link>
          <br />
          <br />
          <center>
            <Link className="button-secondary" to={"/register"}>
              Crear cuenta
            </Link>
          </center>
        </div>
      </section>
      <div>
        <section className="lower-sections">
          <h1>No vayas al poli, vive el poli</h1>
          <h2>Agenda clases de musica, deportes o de arte, tu decides.</h2>
          <img alt="classes" src={img2} />
        </section>
        <section className="lower-sections">
          <h2>Desarrolla habilidades y competencias para el futuro.</h2>
          <img alt="classes" src={img3} />
        </section>
        <section className="lower-sections">
          <h2>
            Revisa todos los extracurriculares desde tu celular y agenda ahora!
          </h2>
          <img alt="classes" src={img4} />
        </section>
        <center>
          <Link className="button-primary" to={"/extras"}>
            Agendar Extras
          </Link>
        </center>
        <br/>
        <br/>
        <br/>


      </div>
    </div>
  );
}
