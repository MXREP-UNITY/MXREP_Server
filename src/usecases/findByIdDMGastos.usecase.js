const DMGastosModel = require('../models/dMGastos.model');
exports.findByIdDMGastos = async (id) => { const item = await DMGastosModel.findByIdDMGastos(id); return { item }; };
