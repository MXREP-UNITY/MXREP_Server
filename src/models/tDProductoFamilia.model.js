const mongoose = require("mongoose");
const tDProductoFamiliaSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  component: { type: Object },
  SMDproductoFamiliaPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMProductoFamilia" },
  finalPrice: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  status: { type: String },
  teamPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SimulationsTeams" },
  totalCost: { type: String },
}, { timestamps: true });

tDProductoFamiliaSchema.statics.findAllTDProductoFamilias = function() { return this.find(); };
tDProductoFamiliaSchema.statics.findByIdTDProductoFamilia = function(id) { return this.findById(id); };
tDProductoFamiliaSchema.statics.createTDProductoFamilia = function(data) { return this.create(data); };
tDProductoFamiliaSchema.statics.updateTDProductoFamilia = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
tDProductoFamiliaSchema.statics.deleteTDProductoFamilia = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("TDProductoFamilia", tDProductoFamiliaSchema, "TDProductoFamilia");
