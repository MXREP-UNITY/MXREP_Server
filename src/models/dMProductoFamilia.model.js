const mongoose = require("mongoose");
const dMProductoFamiliaSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  codigo: { type: String },
  component: { type: Object },
  imagen: { type: String },
  nombre: { type: String },
  videos: { type: Array },
}, { timestamps: true });

dMProductoFamiliaSchema.statics.findAllDMProductoFamilias = function() { return this.find(); };
dMProductoFamiliaSchema.statics.findByIdDMProductoFamilia = function(id) { return this.findById(id); };
dMProductoFamiliaSchema.statics.createDMProductoFamilia = function(data) { return this.create(data); };
dMProductoFamiliaSchema.statics.updateDMProductoFamilia = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMProductoFamiliaSchema.statics.deleteDMProductoFamilia = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMProductoFamilia", dMProductoFamiliaSchema, "DMProductoFamilia");
