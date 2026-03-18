const SimulationsPurchasingModel = require('../models/simulationsPurchasing.model');
exports.createSimulationsPurchasing = async (data) => { const item = await SimulationsPurchasingModel.createSimulationsPurchasing(data); return { item }; };
