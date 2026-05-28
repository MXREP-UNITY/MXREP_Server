const DMOrderHistoryModel = require('../models/dMOrderHistory.model');
exports.createDMOrderHistory = async (data) => { const item = await DMOrderHistoryModel.createDMOrderHistory(data); return { item }; };
