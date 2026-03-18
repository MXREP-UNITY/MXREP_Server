const DMProveedoresModel = require('../models/dMProveedores.model');
exports.deleteDMProveedores = async (id) => { const item = await DMProveedoresModel.deleteDMProveedores(id); return { item }; };
