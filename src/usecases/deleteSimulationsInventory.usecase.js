const SimulationsInventoryModel = require('../models/simulationsInventory.model');
exports.deleteSimulationsInventory = async (id) => { const item = await SimulationsInventoryModel.deleteSimulationsInventory(id); return { item }; };
