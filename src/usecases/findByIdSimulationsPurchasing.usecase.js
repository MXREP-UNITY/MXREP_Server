const SimulationsPurchasingModel = require('../models/simulationsPurchasing.model');
exports.findByIdSimulationsPurchasing = async (id) => { const item = await SimulationsPurchasingModel.findByIdSimulationsPurchasing(id); return { item }; };
