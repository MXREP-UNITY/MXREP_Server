const mongoose = require("mongoose");
const logsDeleteSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
}, { timestamps: true });

logsDeleteSchema.statics.findAllLogsDeletes = function() { return this.find(); };
logsDeleteSchema.statics.findByIdLogsDelete = function(id) { return this.findById(id); };
logsDeleteSchema.statics.createLogsDelete = function(data) { return this.create(data); };
logsDeleteSchema.statics.updateLogsDelete = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
logsDeleteSchema.statics.deleteLogsDelete = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("LogsDelete", logsDeleteSchema, "LogsDelete");
