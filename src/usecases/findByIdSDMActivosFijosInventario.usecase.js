const SDMActivosFijosInventarioModel = require('../models/sDMActivosFijosInventario.model');
exports.findByIdSDMActivosFijosInventario = async (id) => { const item = await SDMActivosFijosInventarioModel.findByIdSDMActivosFijosInventario(id); return { item }; };
