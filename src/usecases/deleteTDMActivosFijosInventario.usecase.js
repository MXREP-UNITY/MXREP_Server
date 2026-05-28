const TDMActivosFijosInventarioModel = require('../models/tDMActivosFijosInventario.model');
exports.deleteTDMActivosFijosInventario = async (id) => { const item = await TDMActivosFijosInventarioModel.deleteTDMActivosFijosInventario(id); return { item }; };
