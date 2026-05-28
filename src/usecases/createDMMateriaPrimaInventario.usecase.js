const DMMateriaPrimaInventarioModel = require('../models/dMMateriaPrimaInventario.model');
exports.createDMMateriaPrimaInventario = async (data) => { const item = await DMMateriaPrimaInventarioModel.createDMMateriaPrimaInventario(data); return { item }; };
