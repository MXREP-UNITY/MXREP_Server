const SDMMateriaPrimaInventarioModel = require('../models/sDMMateriaPrimaInventario.model');
exports.updateSDMMateriaPrimaInventario = async (id, data) => { const item = await SDMMateriaPrimaInventarioModel.updateSDMMateriaPrimaInventario(id, data); return { item }; };
