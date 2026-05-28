const mongoose = require("mongoose");
const solicitudesUsuariosSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  apellidoMaterno: { type: String },
  apellidoPaterno: { type: String },
  comentario: { type: String },
  correoElectronico: { type: String },
  matricula: { type: String },
  nombre: { type: String },
  nombreUniversidad: { type: String },
  numeroAlumnos: { type: String },
  status: { type: String },
  telefono: { type: String },
}, { timestamps: true });

solicitudesUsuariosSchema.statics.findAllSolicitudesUsuarioss = function() { return this.find(); };
solicitudesUsuariosSchema.statics.findByIdSolicitudesUsuarios = function(id) { return this.findById(id); };
solicitudesUsuariosSchema.statics.createSolicitudesUsuarios = function(data) { return this.create(data); };
solicitudesUsuariosSchema.statics.updateSolicitudesUsuarios = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
solicitudesUsuariosSchema.statics.deleteSolicitudesUsuarios = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SolicitudesUsuarios", solicitudesUsuariosSchema, "SolicitudesUsuarios");
