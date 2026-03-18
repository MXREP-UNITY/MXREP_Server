const DMMateriaPrimaInventarioModel = require('../models/dMMateriaPrimaInventario.model');
exports.findByIdDMMateriaPrimaInventario = async (id) => { const item = await DMMateriaPrimaInventarioModel.findByIdDMMateriaPrimaInventario(id); return { item }; };
