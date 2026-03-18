const mongoose = require("mongoose");
const tDProductionLineSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  employeeTDMSprt: { type: mongoose.Schema.Types.ObjectId, ref: "TDMEmployees" },
  fixedAssetTDMSprt: { type: mongoose.Schema.Types.ObjectId, ref: "TDMActivosFijosInventario" },
  phaseSDMPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProductionLinePhases" },
  productionLineTDSptr: { type: mongoose.Schema.Types.ObjectId, ref: "TDActivatedProductionLine" },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  templateSDMPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProductionLineTemplates" },
  type: { type: String },
}, { timestamps: true });

tDProductionLineSchema.statics.findAllTDProductionLines = function() { return this.find(); };
tDProductionLineSchema.statics.findByIdTDProductionLine = function(id) { return this.findById(id); };
tDProductionLineSchema.statics.createTDProductionLine = function(data) { return this.create(data); };
tDProductionLineSchema.statics.updateTDProductionLine = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
tDProductionLineSchema.statics.deleteTDProductionLine = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("TDProductionLine", tDProductionLineSchema, "TDProductionLine");
