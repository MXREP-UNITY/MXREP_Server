const SDMProveedoresMPModel = require('../models/sDMProveedoresMP.model');
exports.updateSDMProveedoresMP = async (id, data) => { const item = await SDMProveedoresMPModel.updateSDMProveedoresMP(id, data); return { item }; };
