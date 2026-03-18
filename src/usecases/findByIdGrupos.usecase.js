const GruposModel = require('../models/grupos.model');
exports.findByIdGrupos = async (id) => {
  const item = await GruposModel.findByIdGrupos(id);
  return { item };
};
