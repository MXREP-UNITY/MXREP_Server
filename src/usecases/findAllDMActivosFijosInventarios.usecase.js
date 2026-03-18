const DMActivosFijosInventarioModel = require('../models/dMActivosFijosInventario.model');
exports.findAllDMActivosFijosInventarios = async () => { const items = await DMActivosFijosInventarioModel.findAllDMActivosFijosInventarios(); return { items }; };
