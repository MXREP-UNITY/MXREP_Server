const TDProductoFamiliaModel = require('../models/tDProductoFamilia.model');
exports.deleteTDProductoFamilia = async (id) => { const item = await TDProductoFamiliaModel.deleteTDProductoFamilia(id); return { item }; };
