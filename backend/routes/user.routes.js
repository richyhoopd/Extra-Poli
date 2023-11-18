const { Router } = require("express");
const router = Router();

const {
  registrarUsuario,
  iniciarSesion,
  obtenerTodos,
  obtenerUno,
  inscribirseEnCurso,
  obtenerCursos,
  alumnosInscritos
} = require("../controllers/user.controller");

router.route("/")
  .post(registrarUsuario)
  .get(obtenerTodos);

router.route('/inscribir/:id')
  .post(inscribirseEnCurso)

router.route('/cursos/:id')
  .get(obtenerCursos)

router.route('/:id')
  .get(obtenerUno)

router.route("/iniciar/sesion")
  .post(iniciarSesion);

router.route("/alumnos/inscritos/:id")
  .get(alumnosInscritos);

module.exports = router;