const DMPaisesModel = require('../models/dMPaises.model');
exports.findByIdDMPaises = async (id) => { const item = await DMPaisesModel.findByIdDMPaises(id); return { item }; };
