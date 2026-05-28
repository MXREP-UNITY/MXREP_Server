const SimulationsModel = require('../models/simulations.model');
exports.createSimulations = async (data) => {
  const item = await SimulationsModel.createSimulations(data);
  return { item };
};
