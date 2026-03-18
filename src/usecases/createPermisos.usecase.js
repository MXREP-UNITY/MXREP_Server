const PermisosModel = require('../models/permisos.model');
exports.createPermisos = async (data) => {
  const item = await PermisosModel.createPermisos(data);
  return { item };
};
