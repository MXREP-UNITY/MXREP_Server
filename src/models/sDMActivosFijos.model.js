const mongoose = require("mongoose");
const sDMActivosFijosSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  departamento: { type: String },
  descripcion: { type: String },
  fechaAdquisicion: { type: String },
  marca: { type: String },
  modelo: { type: String },
  nombre: { type: String },
  numeroSerie: { type: String },
  precioCosto: { type: String },
  precioVenta: { type: String },
  referenciaId: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  tarifaDepreciacion: { type: String },
  tiempoVida: { type: String },
}, { timestamps: true });

sDMActivosFijosSchema.statics.findAllSDMActivosFijoss = function() { return this.find(); };
sDMActivosFijosSchema.statics.findByIdSDMActivosFijos = function(id) { return this.findById(id); };
sDMActivosFijosSchema.statics.createSDMActivosFijos = function(data) { return this.create(data); };
sDMActivosFijosSchema.statics.updateSDMActivosFijos = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMActivosFijosSchema.statics.deleteSDMActivosFijos = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMActivosFijos", sDMActivosFijosSchema, "SDMActivosFijos");
