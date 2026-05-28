const SimulationsOrdersSuppliersModel = require('../models/simulationsOrdersSuppliers.model');
exports.deleteSimulationsOrdersSuppliers = async (id) => { const item = await SimulationsOrdersSuppliersModel.deleteSimulationsOrdersSuppliers(id); return { item }; };
