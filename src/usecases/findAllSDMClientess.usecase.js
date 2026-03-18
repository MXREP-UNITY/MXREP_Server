const SDMClientesModel = require('../models/sDMClientes.model');
exports.findAllSDMClientess = async () => { const items = await SDMClientesModel.findAllSDMClientess(); return { items }; };
