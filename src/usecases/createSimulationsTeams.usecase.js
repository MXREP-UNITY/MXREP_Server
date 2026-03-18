const SimulationsTeamsModel = require('../models/simulationsTeams.model');
exports.createSimulationsTeams = async (data) => {
  const item = await SimulationsTeamsModel.createSimulationsTeams(data);
  return { item };
};
