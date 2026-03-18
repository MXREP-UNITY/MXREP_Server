const mongoose = require("mongoose");
const sDMProveedoresSchema = new mongoose.Schema({
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

sDMProveedoresSchema.statics.findAllSDMProveedoress = function() { return this.find(); };
sDMProveedoresSchema.statics.findByIdSDMProveedores = function(id) { return this.findById(id); };
sDMProveedoresSchema.statics.createSDMProveedores = function(data) { return this.create(data); };
sDMProveedoresSchema.statics.updateSDMProveedores = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMProveedoresSchema.statics.deleteSDMProveedores = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMProveedores", sDMProveedoresSchema, "SDMProveedores");
