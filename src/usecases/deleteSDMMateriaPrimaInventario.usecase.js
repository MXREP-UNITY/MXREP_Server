const SDMMateriaPrimaInventarioModel = require('../models/sDMMateriaPrimaInventario.model');
exports.deleteSDMMateriaPrimaInventario = async (id) => { const item = await SDMMateriaPrimaInventarioModel.deleteSDMMateriaPrimaInventario(id); return { item }; };
