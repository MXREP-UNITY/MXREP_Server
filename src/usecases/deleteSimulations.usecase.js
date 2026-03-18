const SimulationsModel = require('../models/simulations.model');
exports.deleteSimulations = async (id) => {
  const item = await SimulationsModel.deleteSimulations(id);
  return { item };
};
