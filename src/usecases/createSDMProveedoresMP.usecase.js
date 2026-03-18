const SDMProveedoresMPModel = require('../models/sDMProveedoresMP.model');
exports.createSDMProveedoresMP = async (data) => { const item = await SDMProveedoresMPModel.createSDMProveedoresMP(data); return { item }; };
