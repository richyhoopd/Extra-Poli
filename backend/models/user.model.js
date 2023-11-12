const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  nombre: { type: String, required: true },
  siiau: {type: String, required: true, unique: true},
  correo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cursosInscritos: [{ type: Schema.Types.ObjectId, ref: 'Clase' }],
  isAdmin: {type: Boolean, default: false}
});

module.exports = model("Usuario", userSchema);
