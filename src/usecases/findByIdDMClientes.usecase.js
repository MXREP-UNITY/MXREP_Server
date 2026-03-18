const DMClientesModel = require('../models/dMClientes.model');
exports.findByIdDMClientes = async (id) => { const item = await DMClientesModel.findByIdDMClientes(id); return { item }; };
