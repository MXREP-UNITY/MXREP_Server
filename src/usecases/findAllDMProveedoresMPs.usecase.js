const DMProveedoresMPModel = require('../models/dMProveedoresMP.model');
exports.findAllDMProveedoresMPs = async () => { const items = await DMProveedoresMPModel.findAllDMProveedoresMPs(); return { items }; };
