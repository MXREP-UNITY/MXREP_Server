const mongoose = require("mongoose");
const dMOrderHistorySchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  productoPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMProductoFamilia" },
  quantity: { type: Number },
}, { timestamps: true });

dMOrderHistorySchema.statics.findAllDMOrderHistorys = function() { return this.find(); };
dMOrderHistorySchema.statics.findByIdDMOrderHistory = function(id) { return this.findById(id); };
dMOrderHistorySchema.statics.createDMOrderHistory = function(data) { return this.create(data); };
dMOrderHistorySchema.statics.updateDMOrderHistory = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMOrderHistorySchema.statics.deleteDMOrderHistory = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMOrderHistory", dMOrderHistorySchema, "DMOrderHistory");
