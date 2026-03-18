const TDSimulationFinancialLogModel = require('../models/tDSimulationFinancialLog.model');
exports.createTDSimulationFinancialLog = async (data) => { const item = await TDSimulationFinancialLogModel.createTDSimulationFinancialLog(data); return { item }; };
