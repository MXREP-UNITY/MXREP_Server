const LogsDeleteModel = require('../models/logsDelete.model');
exports.findAllLogsDeletes = async () => {
  const items = await LogsDeleteModel.findAllLogsDeletes();
  return { items };
};
