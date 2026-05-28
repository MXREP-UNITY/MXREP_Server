const SDMGastosModel = require('../models/sDMGastos.model');
exports.findByIdSDMGastos = async (id) => { const item = await SDMGastosModel.findByIdSDMGastos(id); return { item }; };
