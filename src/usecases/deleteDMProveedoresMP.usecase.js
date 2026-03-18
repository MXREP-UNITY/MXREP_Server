const DMProveedoresMPModel = require('../models/dMProveedoresMP.model');
exports.deleteDMProveedoresMP = async (id) => { const item = await DMProveedoresMPModel.deleteDMProveedoresMP(id); return { item }; };
