const GruposUsuariosModel = require('../models/gruposUsuarios.model');
exports.findByIdGruposUsuarios = async (id) => {
  const item = await GruposUsuariosModel.findByIdGruposUsuarios(id);
  return { item };
};
