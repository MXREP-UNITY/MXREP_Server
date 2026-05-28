const mongoose = require("mongoose");
const sDMGastosSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  cuenta: { type: String },
  importar: { type: String },
  periodo: { type: String },
  porcentaje: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  tipo: { type: String },
}, { timestamps: true });

sDMGastosSchema.statics.findAllSDMGastoss = function() { return this.find(); };
sDMGastosSchema.statics.findByIdSDMGastos = function(id) { return this.findById(id); };
sDMGastosSchema.statics.createSDMGastos = function(data) { return this.create(data); };
sDMGastosSchema.statics.updateSDMGastos = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMGastosSchema.statics.deleteSDMGastos = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMGastos", sDMGastosSchema, "SDMGastos");
