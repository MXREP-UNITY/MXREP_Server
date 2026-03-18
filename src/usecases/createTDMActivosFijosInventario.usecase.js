const TDMActivosFijosInventarioModel = require('../models/tDMActivosFijosInventario.model');
exports.createTDMActivosFijosInventario = async (data) => { const item = await TDMActivosFijosInventarioModel.createTDMActivosFijosInventario(data); return { item }; };
