const mongoose = require("mongoose");
const dMEmpleadosSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  exists: { type: Boolean, default: true },
  DMsalaryTabulatorPtr: { type: mongoose.Schema.Types.ObjectId, ref: "DMSalaryTabulator" },
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
  suburbio: { type: String },
  telefono: { type: String },
  trabajo: { type: String },
}, { timestamps: true });

dMEmpleadosSchema.statics.findAllDMEmpleadoss = function() { return this.find(); };
dMEmpleadosSchema.statics.findByIdDMEmpleados = function(id) { return this.findById(id); };
dMEmpleadosSchema.statics.createDMEmpleados = function(data) { return this.create(data); };
dMEmpleadosSchema.statics.updateDMEmpleados = function(id, data) { return this.findByIdAndUpdate(id, data, { new: true }); };
dMEmpleadosSchema.statics.deleteDMEmpleados = function(id) { return this.findByIdAndDelete(id); };

module.exports = mongoose.model("DMEmpleados", dMEmpleadosSchema, "DMEmpleados");
