const DMProveedoresModel = require('../models/dMProveedores.model');
exports.findAllDMProveedoress = async () => { const items = await DMProveedoresModel.findAllDMProveedoress(); return { items }; };
