const BitacoraModel = require('../models/bitacora.model');
exports.findByIdBitacora = async (id) => {
  const item = await BitacoraModel.findByIdBitacora(id);
  return { item };
};
