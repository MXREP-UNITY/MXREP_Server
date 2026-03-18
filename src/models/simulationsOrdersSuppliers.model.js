const mongoose = require("mongoose");
const simulationsOrdersSuppliersSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  DMRawMaterialPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMMateriaPrima" },
  SDMSupplierPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProveedores" },
  simulationOrderPurchaingPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsOrdersPurchasings" },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  deliveryDays: { type: String },
  status: { type: String },
  totalAmountRawMaterial: { type: String },
  totalDeliveryDays: { type: String },
}, { timestamps: true });

simulationsOrdersSuppliersSchema.statics.findAllSimulationsOrdersSupplierss = function() { return this.find(); };
simulationsOrdersSuppliersSchema.statics.findByIdSimulationsOrdersSuppliers = function(id) { return this.findById(id); };
simulationsOrdersSuppliersSchema.statics.createSimulationsOrdersSuppliers = function(data) { return this.create(data); };
simulationsOrdersSuppliersSchema.statics.updateSimulationsOrdersSuppliers = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsOrdersSuppliersSchema.statics.deleteSimulationsOrdersSuppliers = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsOrdersSuppliers", simulationsOrdersSuppliersSchema, "SimulationsOrdersSuppliers");
