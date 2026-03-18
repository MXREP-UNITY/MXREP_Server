const GruposModel = require('../models/grupos.model');
exports.findAllGruposs = async () => {
  const items = await GruposModel.findAllGruposs();
  return { items };
};
