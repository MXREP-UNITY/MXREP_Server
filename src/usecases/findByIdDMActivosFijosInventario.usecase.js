const DMActivosFijosInventarioModel = require('../models/dMActivosFijosInventario.model');
exports.findByIdDMActivosFijosInventario = async (id) => { const item = await DMActivosFijosInventarioModel.findByIdDMActivosFijosInventario(id); return { item }; };
