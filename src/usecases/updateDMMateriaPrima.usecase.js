const DMMateriaPrimaModel = require('../models/dMMateriaPrima.model');
exports.updateDMMateriaPrima = async (id, data) => { const item = await DMMateriaPrimaModel.updateDMMateriaPrima(id, data); return { item }; };
