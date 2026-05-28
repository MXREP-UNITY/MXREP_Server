const DMProductoFamiliaModel = require('../models/dMProductoFamilia.model');
exports.findByIdDMProductoFamilia = async (id) => { const item = await DMProductoFamiliaModel.findByIdDMProductoFamilia(id); return { item }; };
