const GruposUsuariosModel = require('../models/gruposUsuarios.model');
exports.deleteGruposUsuarios = async (id) => {
  const item = await GruposUsuariosModel.deleteGruposUsuarios(id);
  return { item };
};
