const SDMProductoFamiliaModel = require('../models/sDMProductoFamilia.model');
exports.updateSDMProductoFamilia = async (id, data) => { const item = await SDMProductoFamiliaModel.updateSDMProductoFamilia(id, data); return { item }; };
