const LogsDeleteModel = require('../models/logsDelete.model');
exports.updateLogsDelete = async (id, data) => {
  const item = await LogsDeleteModel.updateLogsDelete(id, data);
  return { item };
};
