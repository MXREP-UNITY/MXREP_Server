const mongoose = require("mongoose");
const dMSalaryTabulatorSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  area: { type: String },
  department: { type: String },
  salary: { type: String },
}, { timestamps: true });

dMSalaryTabulatorSchema.statics.findAllDMSalaryTabulators = function() { return this.find(); };
dMSalaryTabulatorSchema.statics.findByIdDMSalaryTabulator = function(id) { return this.findById(id); };
dMSalaryTabulatorSchema.statics.createDMSalaryTabulator = function(data) { return this.create(data); };
dMSalaryTabulatorSchema.statics.updateDMSalaryTabulator = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMSalaryTabulatorSchema.statics.deleteDMSalaryTabulator = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMSalaryTabulator", dMSalaryTabulatorSchema, "DMSalaryTabulator");
