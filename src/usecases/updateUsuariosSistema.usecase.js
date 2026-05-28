const UsuariosSistemaModel = require('../models/usuariosSistema.model');
exports.updateUsuariosSistema = async (id, data) => {
  const item = await UsuariosSistemaModel.updateUsuariosSistema(id, data);
  return { item };
};
