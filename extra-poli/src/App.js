import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// paginas
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import ListadoCursos from './Pages/ListadoCursos';
import Detalle from './Pages/Detalle';
import PanelAdmin from './Pages/admin/PanelAdmin';
import Success from './Pages/Success';
import Error from './Pages/Error'
import CrearForm from './Pages/admin/CrearForm';
import CursoSuccess from './Pages/CursoSuccess';
import Logout from './Pages/Logout';
import EditForm from './Pages/admin/EditForm';
import ActualizadoSuccess from './Pages/ActualizadoSuccess';
import UserProfile from './Pages/UserProfile';
import ListaAlumnos from './Pages/ListaAlumnos';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      < Route path='/' element={<LandingPage/>} />
      < Route path='/login' element={<Login/>} />
      < Route path='/register' element={<Register/>} />
      < Route path='/home' element={<Home/>} />
      < Route path='/extras' element={<ListadoCursos/>} />
      < Route path='/detalle/:id' element={<Detalle/>} />
      < Route path='/admin/home' element={<PanelAdmin/>} />
      < Route path='/success' element={<Success/>} />
      < Route path='/error' element={<Error/>} />
      < Route path='/extras/admin/crear' element={<CrearForm/>} />
      < Route path='/curso/success' element={<CursoSuccess/>} />
      < Route path='/actualizado/success' element={<ActualizadoSuccess/>} />
      < Route path='/logout' element={<Logout/>} />
      < Route path='/editar/:id' element={<EditForm/>} />
      < Route path='/perfil' element={<UserProfile/>} />
      < Route path='/detalle/alumnos/:id' element={<ListaAlumnos/>} />


      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
