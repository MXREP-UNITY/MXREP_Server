const mongoose = require("mongoose");
const dMPaisesSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  abreviatura: { type: String },
  nombre: { type: String },
  paisEnvio: { type: Boolean },
}, { timestamps: true });

dMPaisesSchema.statics.findAllDMPaisess = function() { return this.find(); };
dMPaisesSchema.statics.findByIdDMPaises = function(id) { return this.findById(id); };
dMPaisesSchema.statics.createDMPaises = function(data) { return this.create(data); };
dMPaisesSchema.statics.updateDMPaises = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMPaisesSchema.statics.deleteDMPaises = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMPaises", dMPaisesSchema, "DMPaises");
