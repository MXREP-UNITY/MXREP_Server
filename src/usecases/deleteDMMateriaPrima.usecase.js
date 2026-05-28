const DMMateriaPrimaModel = require('../models/dMMateriaPrima.model');
exports.deleteDMMateriaPrima = async (id) => { const item = await DMMateriaPrimaModel.deleteDMMateriaPrima(id); return { item }; };
