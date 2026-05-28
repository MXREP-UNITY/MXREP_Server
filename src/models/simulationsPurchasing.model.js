const mongoose = require("mongoose");
const simulationsPurchasingSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  default: { type: Boolean },
  provedorMateriaPrimaSDMPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProveedoresMP" },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  transporteSDMPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMTransporte" },
}, { timestamps: true });

simulationsPurchasingSchema.statics.findAllSimulationsPurchasings = function() { return this.find(); };
simulationsPurchasingSchema.statics.findByIdSimulationsPurchasing = function(id) { return this.findById(id); };
simulationsPurchasingSchema.statics.createSimulationsPurchasing = function(data) { return this.create(data); };
simulationsPurchasingSchema.statics.updateSimulationsPurchasing = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsPurchasingSchema.statics.deleteSimulationsPurchasing = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsPurchasing", simulationsPurchasingSchema, "SimulationsPurchasing");
