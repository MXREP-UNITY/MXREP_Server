const mongoose = require("mongoose");
const dMActivosFijosInventarioSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  activoFijoPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMActivosFijos" },
  cantidad: { type: String },
}, { timestamps: true });

dMActivosFijosInventarioSchema.statics.findAllDMActivosFijosInventarios = function() { return this.find(); };
dMActivosFijosInventarioSchema.statics.findByIdDMActivosFijosInventario = function(id) { return this.findById(id); };
dMActivosFijosInventarioSchema.statics.createDMActivosFijosInventario = function(data) { return this.create(data); };
dMActivosFijosInventarioSchema.statics.updateDMActivosFijosInventario = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMActivosFijosInventarioSchema.statics.deleteDMActivosFijosInventario = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMActivosFijosInventario", dMActivosFijosInventarioSchema, "DMActivosFijosInventario");
