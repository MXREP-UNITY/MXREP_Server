const mongoose = require("mongoose");
const dMRegionesSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  abreviatura: { type: String },
  nombre: { type: String },
}, { timestamps: true });

dMRegionesSchema.statics.findAllDMRegioness = function() { return this.find(); };
dMRegionesSchema.statics.findByIdDMRegiones = function(id) { return this.findById(id); };
dMRegionesSchema.statics.createDMRegiones = function(data) { return this.create(data); };
dMRegionesSchema.statics.updateDMRegiones = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMRegionesSchema.statics.deleteDMRegiones = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMRegiones", dMRegionesSchema, "DMRegiones");
