const mongoose = require("mongoose");
const tDActivatedProductionLineSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  efficiencyPercentage: { type: Number },
  name: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  templateSDMPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProductionLineTemplates" },
}, { timestamps: true });

tDActivatedProductionLineSchema.statics.findAllTDActivatedProductionLines = function() { return this.find(); };
tDActivatedProductionLineSchema.statics.findByIdTDActivatedProductionLine = function(id) { return this.findById(id); };
tDActivatedProductionLineSchema.statics.createTDActivatedProductionLine = function(data) { return this.create(data); };
tDActivatedProductionLineSchema.statics.updateTDActivatedProductionLine = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
tDActivatedProductionLineSchema.statics.deleteTDActivatedProductionLine = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("TDActivatedProductionLine", tDActivatedProductionLineSchema, "TDActivatedProductionLine");
