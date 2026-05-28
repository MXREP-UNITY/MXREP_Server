const SDMProveedoresModel = require('../models/sDMProveedores.model');
exports.deleteSDMProveedores = async (id) => { const item = await SDMProveedoresModel.deleteSDMProveedores(id); return { item }; };
