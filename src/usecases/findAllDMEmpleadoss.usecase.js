const DMEmpleadosModel = require('../models/dMEmpleados.model');
exports.findAllDMEmpleadoss = async () => { const items = await DMEmpleadosModel.findAllDMEmpleadoss(); return { items }; };
