const DMGastosModel = require('../models/dMGastos.model');
exports.createDMGastos = async (data) => { const item = await DMGastosModel.createDMGastos(data); return { item }; };
