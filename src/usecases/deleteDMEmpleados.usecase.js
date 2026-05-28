const DMEmpleadosModel = require('../models/dMEmpleados.model');
exports.deleteDMEmpleados = async (id) => { const item = await DMEmpleadosModel.deleteDMEmpleados(id); return { item }; };
