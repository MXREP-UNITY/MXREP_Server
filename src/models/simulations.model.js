const mongoose = require("mongoose");
const simulationsSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  currentDate: { type: Number },
  depreciacion: { type: Boolean },
  groupPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Grupos" },
  ieps: { type: Boolean },
  initialAmount: { type: String },
  isr: { type: Boolean },
  iva: { type: Boolean },
  lock: { type: Boolean },
  qtyEmployees: { type: String },
  qtyTurns: { type: String },
  salaryEmployees: { type: String },
  simulationName: { type: String },
  speedSimulation: { type: Number },
  status: { type: String },
}, { timestamps: true });

simulationsSchema.statics.findAllSimulationss = function() { return this.find(); };
simulationsSchema.statics.findByIdSimulations = function(id) { return this.findById(id); };
simulationsSchema.statics.createSimulations = function(data) { return this.create(data); };
simulationsSchema.statics.updateSimulations = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsSchema.statics.deleteSimulations = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("Simulations", simulationsSchema, "Simulations");
