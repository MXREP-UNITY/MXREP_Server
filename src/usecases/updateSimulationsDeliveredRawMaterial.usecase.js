const SimulationsDeliveredRawMaterialModel = require('../models/simulationsDeliveredRawMaterial.model');
exports.updateSimulationsDeliveredRawMaterial = async (id, data) => { const item = await SimulationsDeliveredRawMaterialModel.updateSimulationsDeliveredRawMaterial(id, data); return { item }; };
