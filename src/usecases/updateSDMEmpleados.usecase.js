const SDMEmpleadosModel = require('../models/sDMEmpleados.model');
exports.updateSDMEmpleados = async (id, data) => { const item = await SDMEmpleadosModel.updateSDMEmpleados(id, data); return { item }; };
