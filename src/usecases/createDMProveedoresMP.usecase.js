const DMProveedoresMPModel = require('../models/dMProveedoresMP.model');
exports.createDMProveedoresMP = async (data) => { const item = await DMProveedoresMPModel.createDMProveedoresMP(data); return { item }; };
