const SDMProductoFamiliaModel = require('../models/sDMProductoFamilia.model');
exports.deleteSDMProductoFamilia = async (id) => { const item = await SDMProductoFamiliaModel.deleteSDMProductoFamilia(id); return { item }; };
