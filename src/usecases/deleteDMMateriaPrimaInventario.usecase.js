const DMMateriaPrimaInventarioModel = require('../models/dMMateriaPrimaInventario.model');
exports.deleteDMMateriaPrimaInventario = async (id) => { const item = await DMMateriaPrimaInventarioModel.deleteDMMateriaPrimaInventario(id); return { item }; };
