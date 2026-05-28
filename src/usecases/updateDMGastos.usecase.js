const DMGastosModel = require('../models/dMGastos.model');
exports.updateDMGastos = async (id, data) => { const item = await DMGastosModel.updateDMGastos(id, data); return { item }; };
