const DMEmpleadosModel = require('../models/dMEmpleados.model');
exports.findByIdDMEmpleados = async (id) => { const item = await DMEmpleadosModel.findByIdDMEmpleados(id); return { item }; };
