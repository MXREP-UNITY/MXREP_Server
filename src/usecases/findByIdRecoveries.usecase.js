const RecoveriesModel = require('../models/recoveries.model');
exports.findByIdRecoveries = async (id) => {
  const item = await RecoveriesModel.findByIdRecoveries(id);
  return { item };
};
