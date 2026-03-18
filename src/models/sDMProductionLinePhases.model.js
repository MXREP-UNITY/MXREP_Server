const mongoose = require("mongoose");
const sDMProductionLinePhasesSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  description: { type: String },
  fixedAssetSDMPtr: { type: Object },
  hoursFinishPhase: { type: Number },
  name: { type: String },
  quantityEmployees: { type: Object },
  referenceId: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
}, { timestamps: true });

sDMProductionLinePhasesSchema.statics.findAllSDMProductionLinePhases = function() { return this.find(); };
sDMProductionLinePhasesSchema.statics.findByIdSDMProductionLinePhases = function(id) { return this.findById(id); };
sDMProductionLinePhasesSchema.statics.createSDMProductionLinePhases = function(data) { return this.create(data); };
sDMProductionLinePhasesSchema.statics.updateSDMProductionLinePhases = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMProductionLinePhasesSchema.statics.deleteSDMProductionLinePhases = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMProductionLinePhases", sDMProductionLinePhasesSchema, "SDMProductionLinePhases");
