const SimulationsTeamsModel = require('../models/simulationsTeams.model');
exports.findByIdSimulationsTeams = async (id) => {
  const item = await SimulationsTeamsModel.findByIdSimulationsTeams(id);
  return { item };
};
