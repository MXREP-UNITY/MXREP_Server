const mongoose = require("mongoose");
const tDMEmployeesSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  name: { type: String },
  phaseSDMPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProductionLinePhases" },
  referenciIdSDM: { type: String },
  salaryTabulatorPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMSalaryTabulator" },
  shift: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
}, { timestamps: true });

tDMEmployeesSchema.statics.findAllTDMEmployeess = function() { return this.find(); };
tDMEmployeesSchema.statics.findByIdTDMEmployees = function(id) { return this.findById(id); };
tDMEmployeesSchema.statics.createTDMEmployees = function(data) { return this.create(data); };
tDMEmployeesSchema.statics.updateTDMEmployees = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
tDMEmployeesSchema.statics.deleteTDMEmployees = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("TDMEmployees", tDMEmployeesSchema, "TDMEmployees");
