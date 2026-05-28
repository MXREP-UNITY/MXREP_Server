const SimulationsLogsModel = require('../models/simulationsLogs.model');
exports.updateSimulationsLogs = async (id, data) => { const item = await SimulationsLogsModel.updateSimulationsLogs(id, data); return { item }; };
