const DMActivosFijosInventarioModel = require('../models/dMActivosFijosInventario.model');
exports.createDMActivosFijosInventario = async (data) => { const item = await DMActivosFijosInventarioModel.createDMActivosFijosInventario(data); return { item }; };
