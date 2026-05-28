const SDMProveedoresModel = require('../models/sDMProveedores.model');
exports.findByIdSDMProveedores = async (id) => { const item = await SDMProveedoresModel.findByIdSDMProveedores(id); return { item }; };
