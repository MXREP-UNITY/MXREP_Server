const mongoose = require("mongoose");
const sDMProveedoresMPSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  cantidadMinima: { type: String },
  costo: { type: String },
  materiaPrimaPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMMateriaPrima" },
  proveedorPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMProveedores" },
}, { timestamps: true });

sDMProveedoresMPSchema.statics.findAllSDMProveedoresMPs = function() { return this.find(); };
sDMProveedoresMPSchema.statics.findByIdSDMProveedoresMP = function(id) { return this.findById(id); };
sDMProveedoresMPSchema.statics.createSDMProveedoresMP = function(data) { return this.create(data); };
sDMProveedoresMPSchema.statics.updateSDMProveedoresMP = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMProveedoresMPSchema.statics.deleteSDMProveedoresMP = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMProveedoresMP", sDMProveedoresMPSchema, "SDMProveedoresMP");
