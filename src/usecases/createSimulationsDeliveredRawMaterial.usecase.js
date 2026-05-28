const SimulationsDeliveredRawMaterialModel = require('../models/simulationsDeliveredRawMaterial.model');
exports.createSimulationsDeliveredRawMaterial = async (data) => { const item = await SimulationsDeliveredRawMaterialModel.createSimulationsDeliveredRawMaterial(data); return { item }; };
