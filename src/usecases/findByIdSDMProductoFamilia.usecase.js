const SDMProductoFamiliaModel = require('../models/sDMProductoFamilia.model');
exports.findByIdSDMProductoFamilia = async (id) => { const item = await SDMProductoFamiliaModel.findByIdSDMProductoFamilia(id); return { item }; };
