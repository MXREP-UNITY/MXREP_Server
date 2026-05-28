const DMClientesModel = require('../models/dMClientes.model');
exports.updateDMClientes = async (id, data) => { const item = await DMClientesModel.updateDMClientes(id, data); return { item }; };
