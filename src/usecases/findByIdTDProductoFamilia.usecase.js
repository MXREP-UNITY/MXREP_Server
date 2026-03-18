const TDProductoFamiliaModel = require('../models/tDProductoFamilia.model');
exports.findByIdTDProductoFamilia = async (id) => { const item = await TDProductoFamiliaModel.findByIdTDProductoFamilia(id); return { item }; };
