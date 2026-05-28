const DMRegionesModel = require('../models/dMRegiones.model');
exports.createDMRegiones = async (data) => { const item = await DMRegionesModel.createDMRegiones(data); return { item }; };
