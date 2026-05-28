const SimulationsDeliveredRawMaterialModel = require('../models/simulationsDeliveredRawMaterial.model');
exports.findByIdSimulationsDeliveredRawMaterial = async (id) => { const item = await SimulationsDeliveredRawMaterialModel.findByIdSimulationsDeliveredRawMaterial(id); return { item }; };
