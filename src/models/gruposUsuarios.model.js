const mongoose = require("mongoose");
const gruposUsuariosSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  grupoPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Grupos" },
  usuarioPtr: { type: mongoose.Schema.Types.ObjectId, ref: "UsuariosSistema" },
}, { timestamps: true });

gruposUsuariosSchema.statics.findAllGruposUsuarioss = function() { return this.find(); };
gruposUsuariosSchema.statics.findByIdGruposUsuarios = function(id) { return this.findById(id); };
gruposUsuariosSchema.statics.createGruposUsuarios = function(data) { return this.create(data); };
gruposUsuariosSchema.statics.updateGruposUsuarios = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
gruposUsuariosSchema.statics.deleteGruposUsuarios = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("GruposUsuarios", gruposUsuariosSchema, "GruposUsuarios");
