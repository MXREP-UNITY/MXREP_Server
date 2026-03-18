const SDMProductoFamiliaModel = require('../models/sDMProductoFamilia.model');
exports.createSDMProductoFamilia = async (data) => { const item = await SDMProductoFamiliaModel.createSDMProductoFamilia(data); return { item }; };
