const mongoose = require("mongoose");
const simulationsOrdersSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  clientPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMClientes" },
  expectedTime: { type: Number },
  negotiationValue: { type: Number },
  order: { type: Array },
  revenue: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
}, { timestamps: true });

simulationsOrdersSchema.statics.findAllSimulationsOrderss = function() { return this.find(); };
simulationsOrdersSchema.statics.findByIdSimulationsOrders = function(id) { return this.findById(id); };
simulationsOrdersSchema.statics.createSimulationsOrders = function(data) { return this.create(data); };
simulationsOrdersSchema.statics.updateSimulationsOrders = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsOrdersSchema.statics.deleteSimulationsOrders = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsOrders", simulationsOrdersSchema, "SimulationsOrders");
