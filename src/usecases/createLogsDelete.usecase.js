const LogsDeleteModel = require('../models/logsDelete.model');
exports.createLogsDelete = async (data) => {
  const item = await LogsDeleteModel.createLogsDelete(data);
  return { item };
};
