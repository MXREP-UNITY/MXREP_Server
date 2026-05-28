const SDMProveedoresMPModel = require('../models/sDMProveedoresMP.model');
exports.findAllSDMProveedoresMPs = async () => { const items = await SDMProveedoresMPModel.findAllSDMProveedoresMPs(); return { items }; };
