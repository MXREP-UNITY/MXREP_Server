const mongoose = require("mongoose");
const sDMProductoFamiliaSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  codigo: { type: String },
  component: { type: Object },
  imagen: { type: String },
  nombre: { type: String },
  referenciaId: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  videos: { type: Array },
}, { timestamps: true });

sDMProductoFamiliaSchema.statics.findAllSDMProductoFamilias = function() { return this.find(); };
sDMProductoFamiliaSchema.statics.findByIdSDMProductoFamilia = function(id) { return this.findById(id); };
sDMProductoFamiliaSchema.statics.createSDMProductoFamilia = function(data) { return this.create(data); };
sDMProductoFamiliaSchema.statics.updateSDMProductoFamilia = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMProductoFamiliaSchema.statics.deleteSDMProductoFamilia = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMProductoFamilia", sDMProductoFamiliaSchema, "SDMProductoFamilia");
