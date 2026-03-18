const SimulationsTeamsModel = require('../models/simulationsTeams.model');
exports.findAllSimulationsTeamss = async () => {
  const items = await SimulationsTeamsModel.findAllSimulationsTeamss();
  return { items };
};
