const TDProductoFamiliaModel = require('../models/tDProductoFamilia.model');
exports.createTDProductoFamilia = async (data) => { const item = await TDProductoFamiliaModel.createTDProductoFamilia(data); return { item }; };
