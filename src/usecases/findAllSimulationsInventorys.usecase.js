const SimulationsInventoryModel = require('../models/simulationsInventory.model');
exports.findAllSimulationsInventorys = async () => { const items = await SimulationsInventoryModel.findAllSimulationsInventorys(); return { items }; };
