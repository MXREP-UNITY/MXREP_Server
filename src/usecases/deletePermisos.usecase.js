const PermisosModel = require('../models/permisos.model');
exports.deletePermisos = async (id) => {
  const item = await PermisosModel.deletePermisos(id);
  return { item };
};
