const SDMClientesModel = require('../models/sDMClientes.model');
exports.deleteSDMClientes = async (id) => { const item = await SDMClientesModel.deleteSDMClientes(id); return { item }; };
