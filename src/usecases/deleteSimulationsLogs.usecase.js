const SimulationsLogsModel = require('../models/simulationsLogs.model');
exports.deleteSimulationsLogs = async (id) => { const item = await SimulationsLogsModel.deleteSimulationsLogs(id); return { item }; };
