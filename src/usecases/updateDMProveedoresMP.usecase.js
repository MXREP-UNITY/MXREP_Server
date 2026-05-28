const DMProveedoresMPModel = require('../models/dMProveedoresMP.model');
exports.updateDMProveedoresMP = async (id, data) => { const item = await DMProveedoresMPModel.updateDMProveedoresMP(id, data); return { item }; };
