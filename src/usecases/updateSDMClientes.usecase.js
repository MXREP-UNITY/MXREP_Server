const SDMClientesModel = require('../models/sDMClientes.model');
exports.updateSDMClientes = async (id, data) => { const item = await SDMClientesModel.updateSDMClientes(id, data); return { item }; };
