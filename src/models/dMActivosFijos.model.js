const mongoose = require("mongoose");
const dMActivosFijosSchema = new mongoose.Schema({
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
  tarifaDepreciacion: { type: String },
  tiempoVida: { type: String },
}, { timestamps: true });

dMActivosFijosSchema.statics.findAllDMActivosFijoss = function() { return this.find(); };
dMActivosFijosSchema.statics.findByIdDMActivosFijos = function(id) { return this.findById(id); };
dMActivosFijosSchema.statics.createDMActivosFijos = function(data) { return this.create(data); };
dMActivosFijosSchema.statics.updateDMActivosFijos = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMActivosFijosSchema.statics.deleteDMActivosFijos = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMActivosFijos", dMActivosFijosSchema, "DMActivosFijos");
