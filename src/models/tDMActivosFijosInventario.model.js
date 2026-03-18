const mongoose = require("mongoose");
const tDMActivosFijosInventarioSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  Cost: { type: Number },
  LifeTime: { type: Number },
  amount: { type: Number },
  datePurchasing: { type: Number },
  depreciationRate: { type: Number },
  fixedAssetPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMActivosFijos" },
  phaseSDMPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProductionLinePhases" },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  priceSale: { type: Number },
}, { timestamps: true });

tDMActivosFijosInventarioSchema.statics.findAllTDMActivosFijosInventarios = function() { return this.find(); };
tDMActivosFijosInventarioSchema.statics.findByIdTDMActivosFijosInventario = function(id) { return this.findById(id); };
tDMActivosFijosInventarioSchema.statics.createTDMActivosFijosInventario = function(data) { return this.create(data); };
tDMActivosFijosInventarioSchema.statics.updateTDMActivosFijosInventario = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
tDMActivosFijosInventarioSchema.statics.deleteTDMActivosFijosInventario = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("TDMActivosFijosInventario", tDMActivosFijosInventarioSchema, "TDMActivosFijosInventario");
