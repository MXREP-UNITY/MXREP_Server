const mongoose = require("mongoose");
const sDMSalaryTabulatorSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  area: { type: String },
  department: { type: String },
  referenciaId: { type: String },
  salary: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
}, { timestamps: true });

sDMSalaryTabulatorSchema.statics.findAllSDMSalaryTabulators = function() { return this.find(); };
sDMSalaryTabulatorSchema.statics.findByIdSDMSalaryTabulator = function(id) { return this.findById(id); };
sDMSalaryTabulatorSchema.statics.createSDMSalaryTabulator = function(data) { return this.create(data); };
sDMSalaryTabulatorSchema.statics.updateSDMSalaryTabulator = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMSalaryTabulatorSchema.statics.deleteSDMSalaryTabulator = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMSalaryTabulator", sDMSalaryTabulatorSchema, "SDMSalaryTabulator");
