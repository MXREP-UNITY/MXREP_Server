const SDMMateriaPrimaInventarioModel = require('../models/sDMMateriaPrimaInventario.model');
exports.findByIdSDMMateriaPrimaInventario = async (id) => { const item = await SDMMateriaPrimaInventarioModel.findByIdSDMMateriaPrimaInventario(id); return { item }; };
