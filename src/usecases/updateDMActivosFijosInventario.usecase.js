const DMActivosFijosInventarioModel = require('../models/dMActivosFijosInventario.model');
exports.updateDMActivosFijosInventario = async (id, data) => { const item = await DMActivosFijosInventarioModel.updateDMActivosFijosInventario(id, data); return { item }; };
