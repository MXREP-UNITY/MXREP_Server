const DMMateriaPrimaInventarioModel = require('../models/dMMateriaPrimaInventario.model');
exports.updateDMMateriaPrimaInventario = async (id, data) => { const item = await DMMateriaPrimaInventarioModel.updateDMMateriaPrimaInventario(id, data); return { item }; };
