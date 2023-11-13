const { Router } = require("express");
const router = Router();

const {
  registrarUsuario,
  iniciarSesion,
  obtenerTodos,
  obtenerUno,
  inscribirseEnCurso
} = require("../controllers/user.controller");

router.route("/")
  .post(registrarUsuario)
  .get(obtenerTodos);

router.route('/inscribir/:id')
  .post(inscribirseEnCurso)

router.route('/:id')
  .get(obtenerUno)

router.route("/iniciar/sesion")
  .post(iniciarSesion);

module.exports = router;
