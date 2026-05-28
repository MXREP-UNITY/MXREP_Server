const mongoose = require("mongoose");
const sDMTransporteSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  cantidadMax: { type: String },
  cantidadMin: { type: String },
  urgente: { type: Boolean },
  diasEntrega: { type: String },
  lugarDestino: { type: String },
  lugarSalida: { type: String },
  paisPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMPaises" },
  porcentajePrecio: { type: String },
  precio: { type: String },
  productoPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMMateriaPrima" },
  proveedorPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProveedores" },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  tipoEnvio: { type: String },
}, { timestamps: true });

sDMTransporteSchema.statics.findAllSDMTransportes = function() { return this.find(); };
sDMTransporteSchema.statics.findByIdSDMTransporte = function(id) { return this.findById(id); };
sDMTransporteSchema.statics.createSDMTransporte = function(data) { return this.create(data); };
sDMTransporteSchema.statics.updateSDMTransporte = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMTransporteSchema.statics.deleteSDMTransporte = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMTransporte", sDMTransporteSchema, "SDMTransporte");
