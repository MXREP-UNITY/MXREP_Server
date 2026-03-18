const DMClientesModel = require('../models/dMClientes.model');
exports.deleteDMClientes = async (id) => { const item = await DMClientesModel.deleteDMClientes(id); return { item }; };
