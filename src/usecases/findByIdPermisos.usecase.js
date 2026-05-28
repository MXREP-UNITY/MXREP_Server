const PermisosModel = require('../models/permisos.model');
exports.findByIdPermisos = async (id) => {
  const item = await PermisosModel.findByIdPermisos(id);
  return { item };
};
