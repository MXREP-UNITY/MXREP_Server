const DMPaisesModel = require('../models/dMPaises.model');
exports.createDMPaises = async (data) => { const item = await DMPaisesModel.createDMPaises(data); return { item }; };
