const DMRegionesModel = require('../models/dMRegiones.model');
exports.findAllDMRegioness = async () => { const items = await DMRegionesModel.findAllDMRegioness(); return { items }; };
