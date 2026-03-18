const DMGastosModel = require('../models/dMGastos.model');
exports.findAllDMGastoss = async () => { const items = await DMGastosModel.findAllDMGastoss(); return { items }; };
