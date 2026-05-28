const DMActivosFijosModel = require('../models/dMActivosFijos.model');
exports.findAllDMActivosFijoss = async () => { const items = await DMActivosFijosModel.findAllDMActivosFijoss(); return { items }; };
