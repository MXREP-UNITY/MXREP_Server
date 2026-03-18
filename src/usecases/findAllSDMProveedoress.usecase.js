const SDMProveedoresModel = require('../models/sDMProveedores.model');
exports.findAllSDMProveedoress = async () => { const items = await SDMProveedoresModel.findAllSDMProveedoress(); return { items }; };
