const DMProveedoresModel = require('../models/dMProveedores.model');
exports.createDMProveedores = async (data) => { const item = await DMProveedoresModel.createDMProveedores(data); return { item }; };
