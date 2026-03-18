const DMActivosFijosModel = require('../models/dMActivosFijos.model');
exports.updateDMActivosFijos = async (id, data) => { const item = await DMActivosFijosModel.updateDMActivosFijos(id, data); return { item }; };
