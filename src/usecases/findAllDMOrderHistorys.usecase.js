const DMOrderHistoryModel = require('../models/dMOrderHistory.model');
exports.findAllDMOrderHistorys = async () => { const items = await DMOrderHistoryModel.findAllDMOrderHistorys(); return { items }; };
