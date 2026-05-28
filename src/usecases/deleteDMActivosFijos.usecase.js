const DMActivosFijosModel = require('../models/dMActivosFijos.model');
exports.deleteDMActivosFijos = async (id) => { const item = await DMActivosFijosModel.deleteDMActivosFijos(id); return { item }; };
