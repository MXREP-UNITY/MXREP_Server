const DMClientesModel = require('../models/dMClientes.model');
exports.createDMClientes = async (data) => { const item = await DMClientesModel.createDMClientes(data); return { item }; };
