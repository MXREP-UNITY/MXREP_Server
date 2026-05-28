const mongoose = require("mongoose");
const dMProveedoresMPSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  cantidadMinima: { type: String },
  costo: { type: String },
  materiaPrimaPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMMateriaPrima" },
  proveedorPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMProveedores" },
}, { timestamps: true });

dMProveedoresMPSchema.statics.findAllDMProveedoresMPs = function() { return this.find(); };
dMProveedoresMPSchema.statics.findByIdDMProveedoresMP = function(id) { return this.findById(id); };
dMProveedoresMPSchema.statics.createDMProveedoresMP = function(data) { return this.create(data); };
dMProveedoresMPSchema.statics.updateDMProveedoresMP = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMProveedoresMPSchema.statics.deleteDMProveedoresMP = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMProveedoresMP", dMProveedoresMPSchema, "DMProveedoresMP");
