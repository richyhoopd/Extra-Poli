import React from 'react';
import Nav from '../../Components/Nav';
import '../../Styles/admin/panel-admin.css'
import AdminPanelComponent from '../../Components/admin/AdminPanelComponent';

export default function PanelAdmin() {
  return (
    <div className='admin--page--container'>
        <Nav/>
        <h1>Panel de Administrador</h1>
      
        <AdminPanelComponent/>

    </div>
  )
}
