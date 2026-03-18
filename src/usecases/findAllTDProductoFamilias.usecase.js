const TDProductoFamiliaModel = require('../models/tDProductoFamilia.model');
exports.findAllTDProductoFamilias = async () => { const items = await TDProductoFamiliaModel.findAllTDProductoFamilias(); return { items }; };
