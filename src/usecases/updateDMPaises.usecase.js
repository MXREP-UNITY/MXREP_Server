const DMPaisesModel = require('../models/dMPaises.model');
exports.updateDMPaises = async (id, data) => { const item = await DMPaisesModel.updateDMPaises(id, data); return { item }; };
