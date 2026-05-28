const SDMActivosFijosModel = require('../models/sDMActivosFijos.model');
exports.updateSDMActivosFijos = async (id, data) => { const item = await SDMActivosFijosModel.updateSDMActivosFijos(id, data); return { item }; };
