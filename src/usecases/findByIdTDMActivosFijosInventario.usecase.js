const TDMActivosFijosInventarioModel = require('../models/tDMActivosFijosInventario.model');
exports.findByIdTDMActivosFijosInventario = async (id) => { const item = await TDMActivosFijosInventarioModel.findByIdTDMActivosFijosInventario(id); return { item }; };
