const TDActivatedProductionLineModel = require('../models/tDActivatedProductionLine.model');
exports.deleteTDActivatedProductionLine = async (id) => { const item = await TDActivatedProductionLineModel.deleteTDActivatedProductionLine(id); return { item }; };
