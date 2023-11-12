const {Schema, model} = require('mongoose');

const claseSchema = new Schema({
  id_usuario: {type: String},
    nombre: {type: String, required: true, unique: true},
    profesor: {type: String, required: true},
    aula: {type: String, required: true},
    horario: {type: String, required: true},
    dia: {type: String, required: true },
    desc: {type: String, required: true},
    plan: {type: String, required: true},
    egreso: {type: String, required: true},
},{
  timestamps: true
});

module.exports = model('Clase', claseSchema);

