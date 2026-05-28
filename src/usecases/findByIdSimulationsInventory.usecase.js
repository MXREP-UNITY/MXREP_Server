const SimulationsInventoryModel = require('../models/simulationsInventory.model');
exports.findByIdSimulationsInventory = async (id) => { const item = await SimulationsInventoryModel.findByIdSimulationsInventory(id); return { item }; };
