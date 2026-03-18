const mongoose = require("mongoose");
const sDMMateriaPrimaInventarioSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  cantidad: { type: String },
  materaPrimaPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMMateriaPrima" },
  referenciaId: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
}, { timestamps: true });

sDMMateriaPrimaInventarioSchema.statics.findAllSDMMateriaPrimaInventarios = function() { return this.find(); };
sDMMateriaPrimaInventarioSchema.statics.findByIdSDMMateriaPrimaInventario = function(id) { return this.findById(id); };
sDMMateriaPrimaInventarioSchema.statics.createSDMMateriaPrimaInventario = function(data) { return this.create(data); };
sDMMateriaPrimaInventarioSchema.statics.updateSDMMateriaPrimaInventario = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMMateriaPrimaInventarioSchema.statics.deleteSDMMateriaPrimaInventario = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMMateriaPrimaInventario", sDMMateriaPrimaInventarioSchema, "SDMMateriaPrimaInventario");
