const SimulationsOrdersSuppliersModel = require('../models/simulationsOrdersSuppliers.model');
exports.findAllSimulationsOrdersSupplierss = async () => { const items = await SimulationsOrdersSuppliersModel.findAllSimulationsOrdersSupplierss(); return { items }; };
