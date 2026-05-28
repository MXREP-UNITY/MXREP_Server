const SimulationsOrdersModel = require('../models/simulationsOrders.model');
exports.updateSimulationsOrders = async (id, data) => { const item = await SimulationsOrdersModel.updateSimulationsOrders(id, data); return { item }; };
