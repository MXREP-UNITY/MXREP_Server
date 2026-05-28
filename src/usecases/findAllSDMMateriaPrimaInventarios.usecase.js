const SDMMateriaPrimaInventarioModel = require('../models/sDMMateriaPrimaInventario.model');
exports.findAllSDMMateriaPrimaInventarios = async () => { const items = await SDMMateriaPrimaInventarioModel.findAllSDMMateriaPrimaInventarios(); return { items }; };
