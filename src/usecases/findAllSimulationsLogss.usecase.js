const SimulationsLogsModel = require('../models/simulationsLogs.model');
exports.findAllSimulationsLogss = async () => { const items = await SimulationsLogsModel.findAllSimulationsLogss(); return { items }; };
