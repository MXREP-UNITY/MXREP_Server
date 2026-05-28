const DMPaisesModel = require('../models/dMPaises.model');
exports.deleteDMPaises = async (id) => { const item = await DMPaisesModel.deleteDMPaises(id); return { item }; };
