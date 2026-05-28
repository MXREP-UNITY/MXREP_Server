const GruposUsuariosModel = require('../models/gruposUsuarios.model');
exports.updateGruposUsuarios = async (id, data) => {
  const item = await GruposUsuariosModel.updateGruposUsuarios(id, data);
  return { item };
};
