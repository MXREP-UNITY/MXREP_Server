const SDMGastosModel = require('../models/sDMGastos.model');
exports.deleteSDMGastos = async (id) => { const item = await SDMGastosModel.deleteSDMGastos(id); return { item }; };
