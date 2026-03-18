const TDSimulationFinancialLogModel = require('../models/tDSimulationFinancialLog.model');
exports.deleteTDSimulationFinancialLog = async (id) => { const item = await TDSimulationFinancialLogModel.deleteTDSimulationFinancialLog(id); return { item }; };
