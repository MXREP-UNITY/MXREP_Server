const SDMActivosFijosInventarioModel = require('../models/sDMActivosFijosInventario.model');
exports.findAllSDMActivosFijosInventarios = async () => { const items = await SDMActivosFijosInventarioModel.findAllSDMActivosFijosInventarios(); return { items }; };
