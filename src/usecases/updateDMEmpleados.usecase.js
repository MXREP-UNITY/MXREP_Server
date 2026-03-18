const DMEmpleadosModel = require('../models/dMEmpleados.model');
exports.updateDMEmpleados = async (id, data) => { const item = await DMEmpleadosModel.updateDMEmpleados(id, data); return { item }; };
