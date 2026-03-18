const GruposModel = require('../models/grupos.model');
exports.updateGrupos = async (id, data) => {
  const item = await GruposModel.updateGrupos(id, data);
  return { item };
};
