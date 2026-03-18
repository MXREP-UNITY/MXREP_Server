const TDActivatedProductionLineModel = require('../models/tDActivatedProductionLine.model');
exports.findByIdTDActivatedProductionLine = async (id) => { const item = await TDActivatedProductionLineModel.findByIdTDActivatedProductionLine(id); return { item }; };
