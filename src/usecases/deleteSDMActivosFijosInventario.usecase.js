const SDMActivosFijosInventarioModel = require('../models/sDMActivosFijosInventario.model');
exports.deleteSDMActivosFijosInventario = async (id) => { const item = await SDMActivosFijosInventarioModel.deleteSDMActivosFijosInventario(id); return { item }; };
