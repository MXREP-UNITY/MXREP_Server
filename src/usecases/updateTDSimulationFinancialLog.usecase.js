const TDSimulationFinancialLogModel = require('../models/tDSimulationFinancialLog.model');
exports.updateTDSimulationFinancialLog = async (id, data) => { const item = await TDSimulationFinancialLogModel.updateTDSimulationFinancialLog(id, data); return { item }; };
