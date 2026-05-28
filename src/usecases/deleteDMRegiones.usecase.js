const DMRegionesModel = require('../models/dMRegiones.model');
exports.deleteDMRegiones = async (id) => { const item = await DMRegionesModel.deleteDMRegiones(id); return { item }; };
