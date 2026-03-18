const SimulationsInventoryModel = require('../models/simulationsInventory.model');
exports.createSimulationsInventory = async (data) => { const item = await SimulationsInventoryModel.createSimulationsInventory(data); return { item }; };
