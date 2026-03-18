const UsuariosSistemaModel = require('../models/usuariosSistema.model');
exports.createUsuariosSistema = async (data) => {
  const item = await UsuariosSistemaModel.createUsuariosSistema(data);
  return { item };
};
