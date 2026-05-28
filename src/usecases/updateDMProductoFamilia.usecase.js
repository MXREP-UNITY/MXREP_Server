const DMProductoFamiliaModel = require('../models/dMProductoFamilia.model');
exports.updateDMProductoFamilia = async (id, data) => { const item = await DMProductoFamiliaModel.updateDMProductoFamilia(id, data); return { item }; };
