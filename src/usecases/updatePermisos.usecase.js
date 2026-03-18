const PermisosModel = require('../models/permisos.model');
exports.updatePermisos = async (id, data) => {
  const item = await PermisosModel.updatePermisos(id, data);
  return { item };
};
