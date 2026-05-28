const GruposModel = require('../models/grupos.model');
exports.deleteGrupos = async (id) => {
  const item = await GruposModel.deleteGrupos(id);
  return { item };
};
