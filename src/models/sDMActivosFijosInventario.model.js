const mongoose = require("mongoose");
const sDMActivosFijosInventarioSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  activoFijoPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMActivosFijos" },
  cantidad: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
}, { timestamps: true });

sDMActivosFijosInventarioSchema.statics.findAllSDMActivosFijosInventarios = function() { return this.find(); };
sDMActivosFijosInventarioSchema.statics.findByIdSDMActivosFijosInventario = function(id) { return this.findById(id); };
sDMActivosFijosInventarioSchema.statics.createSDMActivosFijosInventario = function(data) { return this.create(data); };
sDMActivosFijosInventarioSchema.statics.updateSDMActivosFijosInventario = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMActivosFijosInventarioSchema.statics.deleteSDMActivosFijosInventario = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMActivosFijosInventario", sDMActivosFijosInventarioSchema, "SDMActivosFijosInventario");
