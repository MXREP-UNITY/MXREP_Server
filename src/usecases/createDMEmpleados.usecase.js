const DMEmpleadosModel = require('../models/dMEmpleados.model');
exports.createDMEmpleados = async (data) => { const item = await DMEmpleadosModel.createDMEmpleados(data); return { item }; };
