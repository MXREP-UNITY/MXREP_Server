const SDMActivosFijosModel = require('../models/sDMActivosFijos.model');
exports.deleteSDMActivosFijos = async (id) => { const item = await SDMActivosFijosModel.deleteSDMActivosFijos(id); return { item }; };
