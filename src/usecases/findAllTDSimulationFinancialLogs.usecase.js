const TDSimulationFinancialLogModel = require('../models/tDSimulationFinancialLog.model');
exports.findAllTDSimulationFinancialLogs = async () => { const items = await TDSimulationFinancialLogModel.findAllTDSimulationFinancialLogs(); return { items }; };
