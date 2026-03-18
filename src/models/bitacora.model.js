const mongoose = require("mongoose");
const bitacoraSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  actividad: { type: String },
  usuarioPtr: { type: mongoose.Schema.Types.ObjectId, ref: "UsuariosSistema" },
  recurso: { type: String },
}, { timestamps: true });

bitacoraSchema.statics.findAllBitacoras = function() { return this.find(); };
bitacoraSchema.statics.findByIdBitacora = function(id) { return this.findById(id); };
bitacoraSchema.statics.createBitacora = function(data) { return this.create(data); };
bitacoraSchema.statics.updateBitacora = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
bitacoraSchema.statics.deleteBitacora = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("Bitacora", bitacoraSchema, "Bitacora");
