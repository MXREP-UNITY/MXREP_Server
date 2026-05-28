const LogsDeleteModel = require('../models/logsDelete.model');
exports.findByIdLogsDelete = async (id) => {
  const item = await LogsDeleteModel.findByIdLogsDelete(id);
  return { item };
};
