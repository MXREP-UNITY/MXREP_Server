const RecoveriesModel = require('../models/recoveries.model');
exports.deleteRecoveries = async (id) => {
  const item = await RecoveriesModel.deleteRecoveries(id);
  return { item };
};
