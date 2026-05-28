const BitacoraModel = require('../models/bitacora.model');
exports.deleteBitacora = async (id) => {
  const item = await BitacoraModel.deleteBitacora(id);
  return { item };
};
