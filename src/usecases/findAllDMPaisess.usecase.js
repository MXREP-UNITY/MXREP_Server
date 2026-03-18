const DMPaisesModel = require('../models/dMPaises.model');
exports.findAllDMPaisess = async () => { const items = await DMPaisesModel.findAllDMPaisess(); return { items }; };
