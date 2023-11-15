const ctrl = {};

const Usuario = require("../models/user.model");
const Clase = require("../models/clase.model")

const bcrypt = require("bcryptjs");

ctrl.obtenerTodos = async (req, res) => {
  res.json(await Usuario.find());
};

ctrl.registrarUsuario = async (req, res) => {
  const { nombre, siiau, correo, password } = req.body;

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  var band = true;
  const usuarios = await Usuario.find();
  
  usuarios.map((u)=>{
    if(u.correo == correo)
      band = false;
  })

  if(band){
    const newUsuario = new Usuario({
      nombre,
      siiau,
      correo,
      password: hash,
    });
    
    await newUsuario.save();
    res.json(newUsuario)
  }else{
    res.json({});
  }
};

ctrl.obtenerUno = async (req, res) => {
  const { id } = req.params;

  const usuario = await Usuario.findById(id);

  res.json(usuario);
};

ctrl.iniciarSesion = async (req, res) => {
  const { siiau, password } = req.body;

  const usuarios = await Usuario.find();

  var resp = {};

  usuarios.map((u) => {
    if ( u.siiau == siiau && bcrypt.compareSync(password, u.password) ) {
      resp = u;
      return;
    }
  });

  res.json(resp);
};

ctrl.obtenerTodosCursos = async (req, res) => {
  res.json(await Clase.find());
};
  
 
ctrl.inscribirseEnCurso = async (req, res) => {
  try {
    const usuarioId = req.params.id;  // Utilizar req.params.id para el ID del usuario
    const claseId = req.body.claseId;  // Utilizar req.body.claseId para el ID de la clase

    const clase = await Clase.findById(claseId);

    console.log(clase);

    if (!clase) {
      console.log('Poop');
      return res.status(404).json({ mensaje: 'Clase no encontrada' });
    }

    const usuario = await Usuario.findById(usuarioId);
    console.log(usuarioId);

    if (usuario.cursosInscritos.includes(claseId)) {
      console.log('Jajaja');
      return res.status(400).json({ mensaje: 'Ya estás inscrito en este curso' });
    }

    usuario.cursosInscritos.push(claseId);
    await usuario.save();

    res.json({ mensaje: 'Inscripción exitosa', curso: clase });
  } catch (error) {
    console.log('AQUI we');
    res.status(500).json({ mensaje: 'Wachi wachi wa', error: error.message });
  }
};

ctrl.obtenerCursos = async(req, res) => {
  try{
    
    const {id} = req.params;
    const usuario = await Usuario.findById(id);

    const cursos = await Promise.all( usuario.cursosInscritos.map( async (c) => { return await Clase.findById(c) } ));
    
    res.json(cursos);

  }catch (err) {
    res.status(500).json({ mensaje: 'Error', error: err})
  }
}

module.exports = ctrl;
