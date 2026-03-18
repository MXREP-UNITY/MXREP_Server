const SimulationsModel = require('../models/simulations.model');
exports.updateSimulations = async (id, data) => {
  const item = await SimulationsModel.updateSimulations(id, data);
  return { item };
};
