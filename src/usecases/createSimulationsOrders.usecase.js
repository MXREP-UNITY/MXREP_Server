const SimulationsOrdersModel = require('../models/simulationsOrders.model');
exports.createSimulationsOrders = async (data) => { const item = await SimulationsOrdersModel.createSimulationsOrders(data); return { item }; };
