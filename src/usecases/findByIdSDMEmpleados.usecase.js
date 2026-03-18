const SDMEmpleadosModel = require('../models/sDMEmpleados.model');
exports.findByIdSDMEmpleados = async (id) => { const item = await SDMEmpleadosModel.findByIdSDMEmpleados(id); return { item }; };
