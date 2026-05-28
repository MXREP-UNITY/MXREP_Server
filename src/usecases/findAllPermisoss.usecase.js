const PermisosModel = require('../models/permisos.model');
exports.findAllPermisoss = async () => {
  const items = await PermisosModel.findAllPermisoss();
  return { items };
};
