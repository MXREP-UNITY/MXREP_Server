const GruposUsuariosModel = require('../models/gruposUsuarios.model');
exports.createGruposUsuarios = async (data) => {
  const item = await GruposUsuariosModel.createGruposUsuarios(data);
  return { item };
};
