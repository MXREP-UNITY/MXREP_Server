const DMMateriaPrimaModel = require('../models/dMMateriaPrima.model');
exports.findByIdDMMateriaPrima = async (id) => { const item = await DMMateriaPrimaModel.findByIdDMMateriaPrima(id); return { item }; };
