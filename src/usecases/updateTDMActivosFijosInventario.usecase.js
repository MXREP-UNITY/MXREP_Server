const TDMActivosFijosInventarioModel = require('../models/tDMActivosFijosInventario.model');
exports.updateTDMActivosFijosInventario = async (id, data) => { const item = await TDMActivosFijosInventarioModel.updateTDMActivosFijosInventario(id, data); return { item }; };
