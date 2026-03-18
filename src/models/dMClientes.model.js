const mongoose = require("mongoose");
const dMClientesSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  apellidoMaterno: { type: String },
  apellidoPaterno: { type: String },
  calle: { type: String },
  ciudad: { type: String },
  codigoPostal: { type: String },
  creditoMonetario: { type: String },
  email: { type: String },
  estado: { type: String },
  nombre: { type: String },
  numero: { type: String },
  suburbio: { type: String },
  telefono: { type: String },
  tipoCliente: { type: String },
}, { timestamps: true });

dMClientesSchema.statics.findAllDMClientess = function() { return this.find(); };
dMClientesSchema.statics.findByIdDMClientes = function(id) { return this.findById(id); };
dMClientesSchema.statics.createDMClientes = function(data) { return this.create(data); };
dMClientesSchema.statics.updateDMClientes = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMClientesSchema.statics.deleteDMClientes = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMClientes", dMClientesSchema, "DMClientes");
