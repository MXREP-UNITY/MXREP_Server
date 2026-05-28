const mongoose = require("mongoose");
const dMMateriaPrimaSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  categoriaPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMMateriaPrimaCategoria" },
  codigo: { type: String },
  imagen: { type: String },
  nombre: { type: String },
  noparte: { type: String },
}, { timestamps: true });

dMMateriaPrimaSchema.statics.findAllDMMateriaPrimas = function() { return this.find(); };
dMMateriaPrimaSchema.statics.findByIdDMMateriaPrima = function(id) { return this.findById(id); };
dMMateriaPrimaSchema.statics.createDMMateriaPrima = function(data) { return this.create(data); };
dMMateriaPrimaSchema.statics.updateDMMateriaPrima = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMMateriaPrimaSchema.statics.deleteDMMateriaPrima = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMMateriaPrima", dMMateriaPrimaSchema, "DMMateriaPrima");
