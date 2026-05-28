const DMActivosFijosModel = require('../models/dMActivosFijos.model');
exports.findByIdDMActivosFijos = async (id) => { const item = await DMActivosFijosModel.findByIdDMActivosFijos(id); return { item }; };
