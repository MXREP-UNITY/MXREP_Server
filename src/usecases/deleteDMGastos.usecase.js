const DMGastosModel = require('../models/dMGastos.model');
exports.deleteDMGastos = async (id) => { const item = await DMGastosModel.deleteDMGastos(id); return { item }; };
