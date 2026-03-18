const SDMProveedoresModel = require('../models/sDMProveedores.model');
exports.createSDMProveedores = async (data) => { const item = await SDMProveedoresModel.createSDMProveedores(data); return { item }; };
