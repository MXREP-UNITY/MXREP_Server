const mongoose = require("mongoose");
const sDMProductionLineTemplatesSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  efficiencyPercentage: { type: Number },
  hoursFinalProduct: { type: Number },
  hoursPhases: { type: Array },
  name: { type: String },
  phases: { type: Array },
  productFamilySDMPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProductoFamilia" },
  productionQuantity: { type: Number },
  quantityFixedAssets: { type: Array },
  referenceId: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
}, { timestamps: true });

sDMProductionLineTemplatesSchema.statics.findAllSDMProductionLineTemplatess = function() { return this.find(); };
sDMProductionLineTemplatesSchema.statics.findByIdSDMProductionLineTemplates = function(id) { return this.findById(id); };
sDMProductionLineTemplatesSchema.statics.createSDMProductionLineTemplates = function(data) { return this.create(data); };
sDMProductionLineTemplatesSchema.statics.updateSDMProductionLineTemplates = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMProductionLineTemplatesSchema.statics.deleteSDMProductionLineTemplates = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMProductionLineTemplates", sDMProductionLineTemplatesSchema, "SDMProductionLineTemplates");
