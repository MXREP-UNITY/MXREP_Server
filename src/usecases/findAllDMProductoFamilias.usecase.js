const DMProductoFamiliaModel = require('../models/dMProductoFamilia.model');
exports.findAllDMProductoFamilias = async () => { const items = await DMProductoFamiliaModel.findAllDMProductoFamilias(); return { items }; };
