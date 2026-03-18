const TDActivatedProductionLineModel = require('../models/tDActivatedProductionLine.model');
exports.updateTDActivatedProductionLine = async (id, data) => { const item = await TDActivatedProductionLineModel.updateTDActivatedProductionLine(id, data); return { item }; };
