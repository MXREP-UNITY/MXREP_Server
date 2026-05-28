const DMOrderHistoryModel = require('../models/dMOrderHistory.model');
exports.deleteDMOrderHistory = async (id) => { const item = await DMOrderHistoryModel.deleteDMOrderHistory(id); return { item }; };
