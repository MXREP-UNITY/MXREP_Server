const SimulationsOrdersSuppliersModel = require('../models/simulationsOrdersSuppliers.model');
exports.updateSimulationsOrdersSuppliers = async (id, data) => { const item = await SimulationsOrdersSuppliersModel.updateSimulationsOrdersSuppliers(id, data); return { item }; };
