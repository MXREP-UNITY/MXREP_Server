const SimulationsLogsModel = require('../models/simulationsLogs.model');
exports.findByIdSimulationsLogs = async (id) => { const item = await SimulationsLogsModel.findByIdSimulationsLogs(id); return { item }; };
