const BitacoraModel = require('../models/bitacora.model');
exports.createBitacora = async (data) => {
  const item = await BitacoraModel.createBitacora(data);
  return { item };
};
