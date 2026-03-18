const mongoose = require("mongoose");
const simulationsEventsSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  event: { type: String },
  index: { type: Number },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  triggerTime: { type: Number },
}, { timestamps: true });

simulationsEventsSchema.statics.findAllSimulationsEventss = function() { return this.find(); };
simulationsEventsSchema.statics.findByIdSimulationsEvents = function(id) { return this.findById(id); };
simulationsEventsSchema.statics.createSimulationsEvents = function(data) { return this.create(data); };
simulationsEventsSchema.statics.updateSimulationsEvents = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsEventsSchema.statics.deleteSimulationsEvents = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsEvents", simulationsEventsSchema, "SimulationsEvents");
