const SDMProveedoresMPModel = require('../models/sDMProveedoresMP.model');
exports.findByIdSDMProveedoresMP = async (id) => { const item = await SDMProveedoresMPModel.findByIdSDMProveedoresMP(id); return { item }; };
