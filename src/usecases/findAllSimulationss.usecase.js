const SimulationsModel = require('../models/simulations.model');
exports.findAllSimulationss = async () => {
  const items = await SimulationsModel.findAllSimulationss();
  return { items };
};
