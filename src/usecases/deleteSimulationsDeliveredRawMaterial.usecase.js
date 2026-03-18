const SimulationsDeliveredRawMaterialModel = require('../models/simulationsDeliveredRawMaterial.model');
exports.deleteSimulationsDeliveredRawMaterial = async (id) => { const item = await SimulationsDeliveredRawMaterialModel.deleteSimulationsDeliveredRawMaterial(id); return { item }; };
