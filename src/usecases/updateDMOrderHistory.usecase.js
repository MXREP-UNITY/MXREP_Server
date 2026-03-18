const DMOrderHistoryModel = require('../models/dMOrderHistory.model');
exports.updateDMOrderHistory = async (id, data) => { const item = await DMOrderHistoryModel.updateDMOrderHistory(id, data); return { item }; };
