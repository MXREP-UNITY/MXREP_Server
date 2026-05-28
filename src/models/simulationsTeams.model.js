const mongoose = require("mongoose");
const simulationsTeamsSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  status: { type: String },
  teamCurrentMoney: { type: String },
  teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "UsuariosSistema" }],
  teamName: { type: String },
  teamOrdersAmount: { type: Number },
}, { timestamps: true });

simulationsTeamsSchema.statics.findAllSimulationsTeamss = function() { return this.find(); };
simulationsTeamsSchema.statics.findByIdSimulationsTeams = function(id) { return this.findById(id); };
simulationsTeamsSchema.statics.createSimulationsTeams = function(data) { return this.create(data); };
simulationsTeamsSchema.statics.updateSimulationsTeams = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsTeamsSchema.statics.deleteSimulationsTeams = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsTeams", simulationsTeamsSchema, "SimulationsTeams");
