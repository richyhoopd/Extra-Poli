import React from "react";
import "../../Styles/Components/admin/panel-admin-component.css";
import { Link } from "react-router-dom";

export default function AdminPanelComponent() {
  return (
    <Link to={"/extras"} className="admin--card--container">
      <div className="txt--admin">
        <p className="titulo--card--admin">Administrar CURSOS</p>
        <p>Crear, editar, gestionar y eliminar cursos</p>
      </div>
    </Link>
  );
}
