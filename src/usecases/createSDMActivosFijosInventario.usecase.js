const SDMActivosFijosInventarioModel = require('../models/sDMActivosFijosInventario.model');
exports.createSDMActivosFijosInventario = async (data) => { const item = await SDMActivosFijosInventarioModel.createSDMActivosFijosInventario(data); return { item }; };
