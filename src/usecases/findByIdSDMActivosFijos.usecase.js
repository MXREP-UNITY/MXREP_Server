const SDMActivosFijosModel = require('../models/sDMActivosFijos.model');
exports.findByIdSDMActivosFijos = async (id) => { const item = await SDMActivosFijosModel.findByIdSDMActivosFijos(id); return { item }; };
