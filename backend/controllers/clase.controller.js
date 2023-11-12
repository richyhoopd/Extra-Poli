const ctrl = {}
const Clase = require('../models/clase.model');

ctrl.crearClase = async(req, res)=>{
    const {
           nombre,
           profesor,
           aula,
           horario,
           dia,
           desc,
           plan,
           egreso
    } = req.body;

    const newClase = await new Clase({
        nombre, 
        profesor,
        aula,
        horario,
        dia,
        desc,
        plan,
        egreso
    }).save();

    res.json(newClase);
}

ctrl.editarClase = async(req, res)=>{
    const {id} = req.params;
    const { nombre, 
        profesor,
        aula,
        horario,
        dia,
        desc,
        plan,
        egreso } = req.body;

    const clase = await Clase.findByIdAndUpdate(id, {
        nombre, 
        profesor,
        aula,
        horario,
        dia,
        desc,
        plan,
        egreso
    })

    res.json(clase);
}

ctrl.obtenerTodas = async(req, res)=>{
    const clases = await Clase.find();

    res.json(clases);
}

ctrl.obtenerUna = async(req, res)=>{
    const {id} = req.params;
    const clase = await Clase.findById(id);

    res.json(clase);
}

ctrl.eliminar = async(req, res)=>{
    const {id} = req.params;
    const clase = await Clase.findOneAndDelete(id);

    res.json(clase);
}

module.exports = ctrl;