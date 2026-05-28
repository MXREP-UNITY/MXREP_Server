const SDMClientesModel = require('../models/sDMClientes.model');
exports.findByIdSDMClientes = async (id) => { const item = await SDMClientesModel.findByIdSDMClientes(id); return { item }; };
