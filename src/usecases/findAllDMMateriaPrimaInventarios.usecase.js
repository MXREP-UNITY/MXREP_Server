const DMMateriaPrimaInventarioModel = require('../models/dMMateriaPrimaInventario.model');
exports.findAllDMMateriaPrimaInventarios = async () => { const items = await DMMateriaPrimaInventarioModel.findAllDMMateriaPrimaInventarios(); return { items }; };
