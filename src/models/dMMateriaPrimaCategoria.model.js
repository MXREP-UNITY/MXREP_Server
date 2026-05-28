const mongoose = require("mongoose");
const dMMateriaPrimaCategoriaSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  abreviatura: { type: String },
  nombre: { type: String },
}, { timestamps: true });

dMMateriaPrimaCategoriaSchema.statics.findAllDMMateriaPrimaCategorias = function() { return this.find(); };
dMMateriaPrimaCategoriaSchema.statics.findByIdDMMateriaPrimaCategoria = function(id) { return this.findById(id); };
dMMateriaPrimaCategoriaSchema.statics.createDMMateriaPrimaCategoria = function(data) { return this.create(data); };
dMMateriaPrimaCategoriaSchema.statics.updateDMMateriaPrimaCategoria = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMMateriaPrimaCategoriaSchema.statics.deleteDMMateriaPrimaCategoria = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMMateriaPrimaCategoria", dMMateriaPrimaCategoriaSchema, "DMMateriaPrimaCategoria");
