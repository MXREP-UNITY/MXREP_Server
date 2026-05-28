const SDMGastosModel = require('../models/sDMGastos.model');
exports.updateSDMGastos = async (id, data) => { const item = await SDMGastosModel.updateSDMGastos(id, data); return { item }; };
