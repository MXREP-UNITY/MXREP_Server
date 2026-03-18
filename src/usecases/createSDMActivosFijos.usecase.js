const SDMActivosFijosModel = require('../models/sDMActivosFijos.model');
exports.createSDMActivosFijos = async (data) => { const item = await SDMActivosFijosModel.createSDMActivosFijos(data); return { item }; };
