const BitacoraModel = require('../models/bitacora.model');
exports.findAllBitacoras = async () => {
  const items = await BitacoraModel.findAllBitacoras();
  return { items };
};
