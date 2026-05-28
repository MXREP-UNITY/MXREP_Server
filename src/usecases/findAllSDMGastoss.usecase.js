const SDMGastosModel = require('../models/sDMGastos.model');
exports.findAllSDMGastoss = async () => { const items = await SDMGastosModel.findAllSDMGastoss(); return { items }; };
