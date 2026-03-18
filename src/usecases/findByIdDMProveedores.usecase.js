const DMProveedoresModel = require('../models/dMProveedores.model');
exports.findByIdDMProveedores = async (id) => { const item = await DMProveedoresModel.findByIdDMProveedores(id); return { item }; };
