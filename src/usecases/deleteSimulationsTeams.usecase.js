const SimulationsTeamsModel = require('../models/simulationsTeams.model');
exports.deleteSimulationsTeams = async (id) => {
  const item = await SimulationsTeamsModel.deleteSimulationsTeams(id);
  return { item };
};
