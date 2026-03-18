const GruposModel = require('../models/grupos.model');
exports.createGrupos = async (data) => {
  const item = await GruposModel.createGrupos(data);
  return { item };
};
