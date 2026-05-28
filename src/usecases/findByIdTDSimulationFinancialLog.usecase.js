const TDSimulationFinancialLogModel = require('../models/tDSimulationFinancialLog.model');
exports.findByIdTDSimulationFinancialLog = async (id) => { const item = await TDSimulationFinancialLogModel.findByIdTDSimulationFinancialLog(id); return { item }; };
