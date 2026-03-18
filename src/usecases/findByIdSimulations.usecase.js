const SimulationsModel = require('../models/simulations.model');
exports.findByIdSimulations = async (id) => {
  const item = await SimulationsModel.findByIdSimulations(id);
  return { item };
};
