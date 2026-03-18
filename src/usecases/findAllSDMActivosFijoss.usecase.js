const SDMActivosFijosModel = require('../models/sDMActivosFijos.model');
exports.findAllSDMActivosFijoss = async () => { const items = await SDMActivosFijosModel.findAllSDMActivosFijoss(); return { items }; };
