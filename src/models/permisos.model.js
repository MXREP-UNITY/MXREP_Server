const mongoose = require("mongoose");
const permisosSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  editable: { type: Boolean },
  renombrable: { type: Boolean },
  clave: { type: String },
  nombre: { type: String },
  bitacora: { type: Array },
  bitacoraSimulacion: { type: Array },
  datosMaestros: { type: Array },
  alumnos: { type: Array },
  eventos: { type: Array },
  grupos: { type: Array },
  moderadores: { type: Array },
  perfil: { type: Array },
  permisos: { type: Array },
  simulaciones: { type: Array },
  solicitudes: { type: Array },
  usuariosAdministrador: { type: Array },
}, { timestamps: true });

permisosSchema.statics.findAllPermisoss = function() { return this.find(); };
permisosSchema.statics.findByIdPermisos = function(id) { return this.findById(id); };
permisosSchema.statics.createPermisos = function(data) { return this.create(data); };
permisosSchema.statics.updatePermisos = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
permisosSchema.statics.deletePermisos = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("Permisos", permisosSchema, "Permisos");
