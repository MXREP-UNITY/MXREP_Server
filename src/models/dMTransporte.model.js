const mongoose = require("mongoose");
const dMTransporteSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  cantidadMax: { type: String },
  cantidadMin: { type: String },
  diasEntrega: { type: String },
  lugarDestino: { type: String },
  lugarSalida: { type: String },
  paisPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMPaises" },
  porcentajePrecio: { type: String },
  precio: { type: String },
  productoPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMMateriaPrima" },
  proveedorPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMProveedores" },
  tipoEnvio: { type: String },
  urgente: { type: Boolean },
}, { timestamps: true });

dMTransporteSchema.statics.findAllDMTransportes = function() { return this.find(); };
dMTransporteSchema.statics.findByIdDMTransporte = function(id) { return this.findById(id); };
dMTransporteSchema.statics.createDMTransporte = function(data) { return this.create(data); };
dMTransporteSchema.statics.updateDMTransporte = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMTransporteSchema.statics.deleteDMTransporte = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMTransporte", dMTransporteSchema, "DMTransporte");
