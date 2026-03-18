const SDMEmpleadosModel = require('../models/sDMEmpleados.model');
exports.findAllSDMEmpleadoss = async () => { const items = await SDMEmpleadosModel.findAllSDMEmpleadoss(); return { items }; };
