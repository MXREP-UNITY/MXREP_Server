const SDMProductoFamiliaModel = require('../models/sDMProductoFamilia.model');
exports.findAllSDMProductoFamilias = async () => { const items = await SDMProductoFamiliaModel.findAllSDMProductoFamilias(); return { items }; };
