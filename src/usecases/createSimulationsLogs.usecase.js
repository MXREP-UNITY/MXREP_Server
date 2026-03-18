const SimulationsLogsModel = require('../models/simulationsLogs.model');
exports.createSimulationsLogs = async (data) => { const item = await SimulationsLogsModel.createSimulationsLogs(data); return { item }; };
