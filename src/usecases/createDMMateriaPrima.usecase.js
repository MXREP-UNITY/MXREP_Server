const DMMateriaPrimaModel = require('../models/dMMateriaPrima.model');
exports.createDMMateriaPrima = async (data) => { const item = await DMMateriaPrimaModel.createDMMateriaPrima(data); return { item }; };
