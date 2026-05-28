const TDMActivosFijosInventarioModel = require('../models/tDMActivosFijosInventario.model');
exports.findAllTDMActivosFijosInventarios = async () => { const items = await TDMActivosFijosInventarioModel.findAllTDMActivosFijosInventarios(); return { items }; };
