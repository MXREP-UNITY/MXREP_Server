const DMProveedoresMPModel = require('../models/dMProveedoresMP.model');
exports.findByIdDMProveedoresMP = async (id) => { const item = await DMProveedoresMPModel.findByIdDMProveedoresMP(id); return { item }; };
