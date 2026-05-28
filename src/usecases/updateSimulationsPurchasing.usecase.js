const SimulationsPurchasingModel = require('../models/simulationsPurchasing.model');
exports.updateSimulationsPurchasing = async (id, data) => { const item = await SimulationsPurchasingModel.updateSimulationsPurchasing(id, data); return { item }; };
