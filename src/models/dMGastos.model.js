const mongoose = require("mongoose");
const dMGastosSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  cuenta: { type: String },
  importar: { type: String },
  periodo: { type: String },
  porcentaje: { type: String },
  tipo: { type: String },
}, { timestamps: true });

dMGastosSchema.statics.findAllDMGastoss = function() { return this.find(); };
dMGastosSchema.statics.findByIdDMGastos = function(id) { return this.findById(id); };
dMGastosSchema.statics.createDMGastos = function(data) { return this.create(data); };
dMGastosSchema.statics.updateDMGastos = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMGastosSchema.statics.deleteDMGastos = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMGastos", dMGastosSchema, "DMGastos");
