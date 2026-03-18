const mongoose = require("mongoose");
const simulationsOrdersPurchasingsSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  datePurchase: { type: Number },
  deliveryDate: { type: Number },
  folioNumber: { type: Number },
  percentagePriceTransport: { type: String },
  priceRawMaterial: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  simulationPurchasinPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsPurchasing" },
  status: { type: String },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  totalAmountRawMaterial: { type: String },
  totalCostRawMaterial: { type: String },
  totalCostTransport: { type: String },
  transportAmount: { type: String },
  transportPrice: { type: String },
  typeTransport: { type: String },
}, { timestamps: true });

simulationsOrdersPurchasingsSchema.statics.findAllSimulationsOrdersPurchasingss = function() { return this.find(); };
simulationsOrdersPurchasingsSchema.statics.findByIdSimulationsOrdersPurchasings = function(id) { return this.findById(id); };
simulationsOrdersPurchasingsSchema.statics.createSimulationsOrdersPurchasings = function(data) { return this.create(data); };
simulationsOrdersPurchasingsSchema.statics.updateSimulationsOrdersPurchasings = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
simulationsOrdersPurchasingsSchema.statics.deleteSimulationsOrdersPurchasings = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SimulationsOrdersPurchasings", simulationsOrdersPurchasingsSchema, "SimulationsOrdersPurchasings");
