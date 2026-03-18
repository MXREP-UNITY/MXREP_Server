const TDActivatedProductionLineModel = require('../models/tDActivatedProductionLine.model');
exports.createTDActivatedProductionLine = async (data) => { const item = await TDActivatedProductionLineModel.createTDActivatedProductionLine(data); return { item }; };
