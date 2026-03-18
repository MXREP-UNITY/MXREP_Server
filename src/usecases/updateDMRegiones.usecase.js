const DMRegionesModel = require('../models/dMRegiones.model');
exports.updateDMRegiones = async (id, data) => { const item = await DMRegionesModel.updateDMRegiones(id, data); return { item }; };
