const SimulationsOrdersSuppliersModel = require('../models/simulationsOrdersSuppliers.model');
exports.createSimulationsOrdersSuppliers = async (data) => { const item = await SimulationsOrdersSuppliersModel.createSimulationsOrdersSuppliers(data); return { item }; };
