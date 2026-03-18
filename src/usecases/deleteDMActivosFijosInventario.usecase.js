const DMActivosFijosInventarioModel = require('../models/dMActivosFijosInventario.model');
exports.deleteDMActivosFijosInventario = async (id) => { const item = await DMActivosFijosInventarioModel.deleteDMActivosFijosInventario(id); return { item }; };
