const SimulationsPurchasingModel = require('../models/simulationsPurchasing.model');
exports.deleteSimulationsPurchasing = async (id) => { const item = await SimulationsPurchasingModel.deleteSimulationsPurchasing(id); return { item }; };
