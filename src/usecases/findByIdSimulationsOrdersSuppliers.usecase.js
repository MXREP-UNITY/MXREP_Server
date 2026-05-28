const SimulationsOrdersSuppliersModel = require('../models/simulationsOrdersSuppliers.model');
exports.findByIdSimulationsOrdersSuppliers = async (id) => { const item = await SimulationsOrdersSuppliersModel.findByIdSimulationsOrdersSuppliers(id); return { item }; };
