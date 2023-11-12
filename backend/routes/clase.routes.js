const { Router } = require("express");
const router = Router();

const {crearClase, editarClase, obtenerTodas, obtenerUna, eliminar, inscribirseEnCurso} = require('../controllers/clase.controller');

router.route('/')
    .post(crearClase)
    .get(obtenerTodas)
    
router.route('/:id')
    .get(obtenerUna)
    .put(editarClase)
    .delete(eliminar)

module.exports = router;
