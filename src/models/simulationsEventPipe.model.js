const mongoose = require("mongoose");
const simulationsEventPipeSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  event: { type: String },
  index: { type: Number },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
}, { timestamps: true });

simulationsEventPipeSchema.statics.findAllSimulationsEventPipes = function() { return this.find(); };
simulationsEventPipeSchema.statics.findByIdSimulationsEventPipe = function(id) { return this.findById(id); };
simulationsEventPipeSchema.statics.createSimulationsEventPipe = function(data) { return this.create(data); };
simulationsEventPipeSchema.statics.updateSimulationsEventPipe = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsEventPipeSchema.statics.deleteSimulationsEventPipe = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsEventPipe", simulationsEventPipeSchema, "SimulationsEventPipe");
