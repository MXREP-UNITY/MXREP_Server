const SDMClientesModel = require('../models/sDMClientes.model');
exports.createSDMClientes = async (data) => { const item = await SDMClientesModel.createSDMClientes(data); return { item }; };
