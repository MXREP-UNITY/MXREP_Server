const SDMEmpleadosModel = require('../models/sDMEmpleados.model');
exports.createSDMEmpleados = async (data) => { const item = await SDMEmpleadosModel.createSDMEmpleados(data); return { item }; };
