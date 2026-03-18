const SimulationsOrdersModel = require('../models/simulationsOrders.model');
exports.findByIdSimulationsOrders = async (id) => { const item = await SimulationsOrdersModel.findByIdSimulationsOrders(id); return { item }; };
