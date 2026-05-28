const DMClientesModel = require('../models/dMClientes.model');
exports.findAllDMClientess = async () => { const items = await DMClientesModel.findAllDMClientess(); return { items }; };
