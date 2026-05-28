const TDProductoFamiliaModel = require('../models/tDProductoFamilia.model');
exports.updateTDProductoFamilia = async (id, data) => { const item = await TDProductoFamiliaModel.updateTDProductoFamilia(id, data); return { item }; };
