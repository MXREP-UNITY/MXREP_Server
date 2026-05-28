const GruposUsuariosModel = require('../models/gruposUsuarios.model');
exports.findAllGruposUsuarioss = async () => {
  const items = await GruposUsuariosModel.findAllGruposUsuarioss();
  return { items };
};
