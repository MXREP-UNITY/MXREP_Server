const SDMMateriaPrimaInventarioModel = require('../models/sDMMateriaPrimaInventario.model');
exports.createSDMMateriaPrimaInventario = async (data) => { const item = await SDMMateriaPrimaInventarioModel.createSDMMateriaPrimaInventario(data); return { item }; };
