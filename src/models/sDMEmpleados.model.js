const mongoose = require("mongoose");
const sDMEmpleadosSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  DMsalaryTabulatorPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMSalaryTabulator" },
  SDMsalaryTabulatorPtr: { type: mongoose.Schema.Types.ObjectId, ref: "SDMSalaryTabulator" },
  apellidoMaterno: { type: String },
  apellidoPaterno: { type: String },
  calle: { type: String },
  ciudad: { type: String },
  curp: { type: String },
  diaInicio: { type: String },
  email: { type: String },
  estado: { type: String },
  estadoCivil: { type: String },
  fechaNacimiento: { type: String },
  giro: { type: String },
  idEmpleado: { type: String },
  imss: { type: String },
  nombre: { type: String },
  numero: { type: String },
  rfc: { type: String },
  salarioHora: { type: String },
  sexo: { type: String },
  simulationPtr: { type: mongoose.Schema.Types.ObjectId, ref: "Simulations" },
  suburbio: { type: String },
  telefono: { type: String },
  trabajo: { type: String },
}, { timestamps: true });

sDMEmpleadosSchema.statics.findAllSDMEmpleadoss = function() { return this.find(); };
sDMEmpleadosSchema.statics.findByIdSDMEmpleados = function(id) { return this.findById(id); };
sDMEmpleadosSchema.statics.createSDMEmpleados = function(data) { return this.create(data); };
sDMEmpleadosSchema.statics.updateSDMEmpleados = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
sDMEmpleadosSchema.statics.deleteSDMEmpleados = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("SDMEmpleados", sDMEmpleadosSchema, "SDMEmpleados");
