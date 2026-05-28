const RecoveriesModel = require('../models/recoveries.model');
exports.findAllRecoveriess = async () => {
  const items = await RecoveriesModel.findAllRecoveriess();
  return { items };
};
