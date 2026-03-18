const SimulationsInventoryModel = require('../models/simulationsInventory.model');
exports.updateSimulationsInventory = async (id, data) => { const item = await SimulationsInventoryModel.updateSimulationsInventory(id, data); return { item }; };
