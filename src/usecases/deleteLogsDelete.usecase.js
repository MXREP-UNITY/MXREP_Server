const LogsDeleteModel = require('../models/logsDelete.model');
exports.deleteLogsDelete = async (id) => {
  const item = await LogsDeleteModel.deleteLogsDelete(id);
  return { item };
};
