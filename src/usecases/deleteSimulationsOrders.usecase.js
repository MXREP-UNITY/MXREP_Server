const SimulationsOrdersModel = require('../models/simulationsOrders.model');
exports.deleteSimulationsOrders = async (id) => { const item = await SimulationsOrdersModel.deleteSimulationsOrders(id); return { item }; };
