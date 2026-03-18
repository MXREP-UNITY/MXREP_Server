const DMActivosFijosModel = require('../models/dMActivosFijos.model');
exports.createDMActivosFijos = async (data) => { const item = await DMActivosFijosModel.createDMActivosFijos(data); return { item }; };
