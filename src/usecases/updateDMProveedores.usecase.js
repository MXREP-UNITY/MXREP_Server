const DMProveedoresModel = require('../models/dMProveedores.model');
exports.updateDMProveedores = async (id, data) => { const item = await DMProveedoresModel.updateDMProveedores(id, data); return { item }; };
