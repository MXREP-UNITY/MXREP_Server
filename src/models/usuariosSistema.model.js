const mongoose = require("mongoose");
const usuariosSistemaSchema = new mongoose.Schema({
  exists: { type: Boolean, default: true },
  active: { type: Boolean, default: true },
  apellidoMaterno: { type: String },
  apellidoPaterno: { type: String },
  colorRobot: { type: String },
  contrasena: { type: String },
  correoElectronico: { type: String },
  matricula: { type: String },
  nombre: { type: String },
  permisoPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Permisos" },
  permisoSimulacionPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Permisos" },
  telefono: { type: String },
}, { timestamps: true });

usuariosSistemaSchema.statics.findAllUsuariosSistemas = function() { return this.find(); };
usuariosSistemaSchema.statics.findByIdUsuariosSistema = function(id) { return this.findById(id); };
usuariosSistemaSchema.statics.createUsuariosSistema = function(data) { return this.create(data); };
usuariosSistemaSchema.statics.updateUsuariosSistema = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
usuariosSistemaSchema.statics.deleteUsuariosSistema = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("UsuariosSistema", usuariosSistemaSchema, "UsuariosSistema");
