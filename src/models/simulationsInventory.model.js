const mongoose = require("mongoose");
const simulationsInventorySchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  simulationOrdersSuppliersPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsOrdersSuppliers" },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  productPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMMateriaPrima" },
  daysReceiptDelay: { type: Number },
  quality: { type: Number },
  receiptDate: { type: Number },
  receiptFolio: { type: Number },
  status: { type: String },
}, { timestamps: true });

simulationsInventorySchema.statics.findAllSimulationsInventorys = function() { return this.find(); };
simulationsInventorySchema.statics.findByIdSimulationsInventory = function(id) { return this.findById(id); };
simulationsInventorySchema.statics.createSimulationsInventory = function(data) { return this.create(data); };
simulationsInventorySchema.statics.updateSimulationsInventory = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsInventorySchema.statics.deleteSimulationsInventory = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsInventory", simulationsInventorySchema, "SimulationsInventory");
