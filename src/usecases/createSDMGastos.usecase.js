const SDMGastosModel = require('../models/sDMGastos.model');
exports.createSDMGastos = async (data) => { const item = await SDMGastosModel.createSDMGastos(data); return { item }; };
