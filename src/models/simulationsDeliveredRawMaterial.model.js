const mongoose = require("mongoose");
const simulationsDeliveredRawMaterialSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  simulationOrderPurchaingPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsOrdersPurchasings" },
  simulationOrderSupplierPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsOrdersSuppliers" },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  totalAmountRawMaterial: { type: Number },
}, { timestamps: true });

simulationsDeliveredRawMaterialSchema.statics.findAllSimulationsDeliveredRawMaterials = function() { return this.find(); };
simulationsDeliveredRawMaterialSchema.statics.findByIdSimulationsDeliveredRawMaterial = function(id) { return this.findById(id); };
simulationsDeliveredRawMaterialSchema.statics.createSimulationsDeliveredRawMaterial = function(data) { return this.create(data); };
simulationsDeliveredRawMaterialSchema.statics.updateSimulationsDeliveredRawMaterial = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsDeliveredRawMaterialSchema.statics.deleteSimulationsDeliveredRawMaterial = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsDeliveredRawMaterial", simulationsDeliveredRawMaterialSchema, "SimulationsDeliveredRawMaterial");
