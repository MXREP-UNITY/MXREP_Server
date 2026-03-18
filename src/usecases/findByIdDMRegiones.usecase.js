const DMRegionesModel = require('../models/dMRegiones.model');
exports.findByIdDMRegiones = async (id) => { const item = await DMRegionesModel.findByIdDMRegiones(id); return { item }; };
