const SDMActivosFijosInventarioModel = require('../models/sDMActivosFijosInventario.model');
exports.updateSDMActivosFijosInventario = async (id, data) => { const item = await SDMActivosFijosInventarioModel.updateSDMActivosFijosInventario(id, data); return { item }; };
