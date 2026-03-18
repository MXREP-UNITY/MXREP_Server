const mongoose = require("mongoose");
const dMProductionLineTemplatesSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  efficiencyPercentage: { type: Number },
  hoursFinalProduct: { type: Number },
  hoursPhases: { type: Array },
  name: { type: String },
  phases: { type: Array },
  productFamilyDMPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMProductoFamilia" },
  productionQuantity: { type: Number },
  quantityFixedAssets: { type: Array },
}, { timestamps: true });

dMProductionLineTemplatesSchema.statics.findAllDMProductionLineTemplatess = function() { return this.find(); };
dMProductionLineTemplatesSchema.statics.findByIdDMProductionLineTemplates = function(id) { return this.findById(id); };
dMProductionLineTemplatesSchema.statics.createDMProductionLineTemplates = function(data) { return this.create(data); };
dMProductionLineTemplatesSchema.statics.updateDMProductionLineTemplates = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMProductionLineTemplatesSchema.statics.deleteDMProductionLineTemplates = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMProductionLineTemplates", dMProductionLineTemplatesSchema, "DMProductionLineTemplates");
