const RecoveriesModel = require('../models/recoveries.model');
exports.updateRecoveries = async (id, data) => {
  const item = await RecoveriesModel.updateRecoveries(id, data);
  return { item };
};
