const DMMateriaPrimaModel = require('../models/dMMateriaPrima.model');
exports.findAllDMMateriaPrimas = async () => { const items = await DMMateriaPrimaModel.findAllDMMateriaPrimas(); return { items }; };
