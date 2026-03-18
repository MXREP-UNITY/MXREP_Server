const SimulationsDeliveredRawMaterialModel = require('../models/simulationsDeliveredRawMaterial.model');
exports.findAllSimulationsDeliveredRawMaterials = async () => { const items = await SimulationsDeliveredRawMaterialModel.findAllSimulationsDeliveredRawMaterials(); return { items }; };
