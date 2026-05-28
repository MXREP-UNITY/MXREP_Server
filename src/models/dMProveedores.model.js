const mongoose = require("mongoose");
const dMProveedoresSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  correoElectronico: { type: String },
  abreviatura: { type: String },
  cuentaBancaria: { type: String },
  diasCredito: { type: String },
  folio: { type: String },
  nombre: { type: String },
  paginaWeb: { type: String },
  rfc: { type: String },
  rsSocial: { type: String },
  telefono: { type: String },
}, { timestamps: true });

dMProveedoresSchema.statics.findAllDMProveedoress = function() { return this.find(); };
dMProveedoresSchema.statics.findByIdDMProveedores = function(id) { return this.findById(id); };
dMProveedoresSchema.statics.createDMProveedores = function(data) { return this.create(data); };
dMProveedoresSchema.statics.updateDMProveedores = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMProveedoresSchema.statics.deleteDMProveedores = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMProveedores", dMProveedoresSchema, "DMProveedores");
