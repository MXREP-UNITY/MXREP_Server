const SDMProveedoresMPModel = require('../models/sDMProveedoresMP.model');
exports.deleteSDMProveedoresMP = async (id) => { const item = await SDMProveedoresMPModel.deleteSDMProveedoresMP(id); return { item }; };
