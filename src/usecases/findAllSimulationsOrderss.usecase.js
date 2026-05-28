const SimulationsOrdersModel = require('../models/simulationsOrders.model');
exports.findAllSimulationsOrderss = async () => { const items = await SimulationsOrdersModel.findAllSimulationsOrderss(); return { items }; };
