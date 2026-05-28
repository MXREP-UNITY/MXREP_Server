const BitacoraModel = require('../models/bitacora.model');
exports.updateBitacora = async (id, data) => {
  const item = await BitacoraModel.updateBitacora(id, data);
  return { item };
};
