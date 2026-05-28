const UsuariosSistemaModel = require('../models/usuariosSistema.model');
exports.deleteUsuariosSistema = async (id) => {
  const item = await UsuariosSistemaModel.deleteUsuariosSistema(id);
  return { item };
};
