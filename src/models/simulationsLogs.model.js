const mongoose = require("mongoose");
const simulationsLogsSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  activity: { type: String },
  description: { type: String },
  optionSimulation: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  userName: { type: String },
  userPtr: { type: mongoose.Schema.Types.ObjectId, ref: "UsuariosSistema" },
}, { timestamps: true });

simulationsLogsSchema.statics.findAllSimulationsLogss = function() { return this.find(); };
simulationsLogsSchema.statics.findByIdSimulationsLogs = function(id) { return this.findById(id); };
simulationsLogsSchema.statics.createSimulationsLogs = function(data) { return this.create(data); };
simulationsLogsSchema.statics.updateSimulationsLogs = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsLogsSchema.statics.deleteSimulationsLogs = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsLogs", simulationsLogsSchema, "SimulationsLogs");
