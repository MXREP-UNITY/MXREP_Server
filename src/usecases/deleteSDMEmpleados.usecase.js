const SDMEmpleadosModel = require('../models/sDMEmpleados.model');
exports.deleteSDMEmpleados = async (id) => { const item = await SDMEmpleadosModel.deleteSDMEmpleados(id); return { item }; };
