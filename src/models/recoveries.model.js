const mongoose = require("mongoose");
const recoveriesSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  code: { type: String },
  email: { type: String },
  expirationTime: { type: Number },
}, { timestamps: true });

recoveriesSchema.statics.findAllRecoveriess = function() { return this.find(); };
recoveriesSchema.statics.findByIdRecoveries = function(id) { return this.findById(id); };
recoveriesSchema.statics.createRecoveries = function(data) { return this.create(data); };
recoveriesSchema.statics.updateRecoveries = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
recoveriesSchema.statics.deleteRecoveries = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("Recoveries", recoveriesSchema, "Recoveries");
