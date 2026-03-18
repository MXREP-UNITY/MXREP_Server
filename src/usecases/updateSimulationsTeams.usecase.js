const SimulationsTeamsModel = require('../models/simulationsTeams.model');
exports.updateSimulationsTeams = async (id, data) => {
  const item = await SimulationsTeamsModel.updateSimulationsTeams(id, data);
  return { item };
};
