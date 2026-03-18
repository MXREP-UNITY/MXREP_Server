const mongoose = require("mongoose");
const sDMClientesSchema = new mongoose.Schema({
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
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  suburbio: { type: String },
  telefono: { type: String },
  tipoCliente: { type: String },
}, { timestamps: true });

sDMClientesSchema.statics.findAllSDMClientess = function() { return this.find(); };
sDMClientesSchema.statics.findByIdSDMClientes = function(id) { return this.findById(id); };
sDMClientesSchema.statics.createSDMClientes = function(data) { return this.create(data); };
sDMClientesSchema.statics.updateSDMClientes = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMClientesSchema.statics.deleteSDMClientes = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMClientes", sDMClientesSchema, "SDMClientes");
