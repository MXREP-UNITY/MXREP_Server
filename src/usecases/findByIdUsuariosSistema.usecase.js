const UsuariosSistemaModel = require('../models/usuariosSistema.model');
exports.findByIdUsuariosSistema = async (id) => {
  const item = await UsuariosSistemaModel.findByIdUsuariosSistema(id);
  return { item };
};
