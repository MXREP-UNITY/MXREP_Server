const mongoose = require("mongoose");
const dMProductionLinePhasesSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  description: { type: String },
  fixedAssetDMPtr: { type: Object },
  hoursFinishPhase: { type: Number },
  name: { type: String },
  quantityEmployees: { type: Object },
}, { timestamps: true });

dMProductionLinePhasesSchema.statics.findAllDMProductionLinePhases = function() { return this.find(); };
dMProductionLinePhasesSchema.statics.findByIdDMProductionLinePhases = function(id) { return this.findById(id); };
dMProductionLinePhasesSchema.statics.createDMProductionLinePhases = function(data) { return this.create(data); };
dMProductionLinePhasesSchema.statics.updateDMProductionLinePhases = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMProductionLinePhasesSchema.statics.deleteDMProductionLinePhases = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMProductionLinePhases", dMProductionLinePhasesSchema, "DMProductionLinePhases");
