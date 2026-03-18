const mongoose = require("mongoose");
const gruposSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  codigo: { type: String },
  nombre: { type: String },
}, { timestamps: true });

gruposSchema.statics.findAllGruposs = function() { return this.find(); };
gruposSchema.statics.findByIdGrupos = function(id) { return this.findById(id); };
gruposSchema.statics.createGrupos = function(data) { return this.create(data); };
gruposSchema.statics.updateGrupos = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
gruposSchema.statics.deleteGrupos = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("Grupos", gruposSchema, "Grupos");
