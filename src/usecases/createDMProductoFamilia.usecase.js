const DMProductoFamiliaModel = require('../models/dMProductoFamilia.model');
exports.createDMProductoFamilia = async (data) => { const item = await DMProductoFamiliaModel.createDMProductoFamilia(data); return { item }; };
