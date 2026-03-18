const RecoveriesModel = require('../models/recoveries.model');
exports.createRecoveries = async (data) => {
  const item = await RecoveriesModel.createRecoveries(data);
  return { item };
};
