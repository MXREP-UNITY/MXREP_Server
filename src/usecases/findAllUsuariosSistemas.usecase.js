const UsuariosSistemaModel = require('../models/usuariosSistema.model');
exports.findAllUsuariosSistemas = async () => {
  const items = await UsuariosSistemaModel.findAllUsuariosSistemas();
  return { items };
};
