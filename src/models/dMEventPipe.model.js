const mongoose = require("mongoose");
const dMEventPipeSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  event: { type: String },
  index: { type: Number },
}, { timestamps: true });

dMEventPipeSchema.statics.findAllDMEventPipes = function() { return this.find(); };
dMEventPipeSchema.statics.findByIdDMEventPipe = function(id) { return this.findById(id); };
dMEventPipeSchema.statics.createDMEventPipe = function(data) { return this.create(data); };
dMEventPipeSchema.statics.updateDMEventPipe = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMEventPipeSchema.statics.deleteDMEventPipe = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMEventPipe", dMEventPipeSchema, "DMEventPipe");
