const mongoose = require("mongoose");
const tDSimulationFinancialLogSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  afterAmount: { type: Number },
  amountMoney: { type: Number },
  beforeAmount: { type: Number },
  simulationDate: { type: Number },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  status: { type: String },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  type: { type: String },
}, { timestamps: true });

tDSimulationFinancialLogSchema.statics.findAllTDSimulationFinancialLogs = function() { return this.find(); };
tDSimulationFinancialLogSchema.statics.findByIdTDSimulationFinancialLog = function(id) { return this.findById(id); };
tDSimulationFinancialLogSchema.statics.createTDSimulationFinancialLog = function(data) { return this.create(data); };
tDSimulationFinancialLogSchema.statics.updateTDSimulationFinancialLog = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
tDSimulationFinancialLogSchema.statics.deleteTDSimulationFinancialLog = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("TDSimulationFinancialLog", tDSimulationFinancialLogSchema, "TDSimulationFinancialLog");
