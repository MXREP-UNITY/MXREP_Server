const DMProductoFamiliaModel = require('../models/dMProductoFamilia.model');
exports.deleteDMProductoFamilia = async (id) => { const item = await DMProductoFamiliaModel.deleteDMProductoFamilia(id); return { item }; };
