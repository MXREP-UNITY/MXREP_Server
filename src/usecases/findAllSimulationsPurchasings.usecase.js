const SimulationsPurchasingModel = require('../models/simulationsPurchasing.model');
exports.findAllSimulationsPurchasings = async () => { const items = await SimulationsPurchasingModel.findAllSimulationsPurchasings(); return { items }; };
