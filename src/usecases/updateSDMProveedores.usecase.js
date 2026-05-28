const SDMProveedoresModel = require('../models/sDMProveedores.model');
exports.updateSDMProveedores = async (id, data) => { const item = await SDMProveedoresModel.updateSDMProveedores(id, data); return { item }; };
