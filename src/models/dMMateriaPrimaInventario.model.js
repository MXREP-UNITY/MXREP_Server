const mongoose = require("mongoose");
const dMMateriaPrimaInventarioSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  cantidad: { type: String },
  materaPrimaPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMMateriaPrima" },
}, { timestamps: true });

dMMateriaPrimaInventarioSchema.statics.findAllDMMateriaPrimaInventarios = function() { return this.find(); };
dMMateriaPrimaInventarioSchema.statics.findByIdDMMateriaPrimaInventario = function(id) { return this.findById(id); };
dMMateriaPrimaInventarioSchema.statics.createDMMateriaPrimaInventario = function(data) { return this.create(data); };
dMMateriaPrimaInventarioSchema.statics.updateDMMateriaPrimaInventario = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMMateriaPrimaInventarioSchema.statics.deleteDMMateriaPrimaInventario = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMMateriaPrimaInventario", dMMateriaPrimaInventarioSchema, "DMMateriaPrimaInventario");
